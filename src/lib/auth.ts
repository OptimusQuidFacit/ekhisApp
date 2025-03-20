import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

import User, { userType } from "./models/user";
import { connectToDb } from "./config/dbconnection";
import bcrypt from "bcryptjs"
import { authConfig } from "./auth.config";


//define login function to be used in the CredentialsProvider

const login = async (credentials: any)=>{
  try{
      connectToDb();
      const user= await User.findOne({name: credentials.name});

      if(!user){
        throw new Error("Username is not registered");
      }
      const passwordIsCorrect= await bcrypt.compare(credentials.password, user.password)
      if(passwordIsCorrect) return user;
      return null;
    }
  catch(err){
    throw new Error('Something went Wrong while trying to login with credentials')
  }
}
// export const authOptions = 

export const { handlers: { GET, POST },
                auth, signIn, signOut } = NextAuth({
                  ...authConfig,
                  // Configure one or more authentication providers
                  providers: [
                    CredentialsProvider(
                      {
                        async authorize(credentials:any){
                          try {
                            const user = await login(credentials);
                            return user;
                          }
                          catch(err){
                            console.log(err)
                            return null;
                          }
                        }
                      }
                     ),
                    //add more providers here
                  ],
                  callbacks:{
                    async signIn({user}:any){
                                          
                        //include the admin property as part of the returned user which is used to set the token and then the session in the auth.config file
                       
                        let returnedUser= await User.findOne({name: user.name}) as userType;
                        user.isAdmin=returnedUser.isAdmin;
                        return true;
                    },
                    ...authConfig.callbacks
                  }
                });
