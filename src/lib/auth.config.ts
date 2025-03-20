export const authConfig = {
    pages: {
      signIn: "/login",
    },
    providers: [],
    callbacks:{
        async jwt({ token, user }:any) {
            if (user) {
              token.id = user.id;
              token.isAdmin = user.isAdmin;
            }
            return token;
          },
          async session({ session, token }:any) {
            if (token) {
              session.user.id = token.id;
              session.user.isAdmin = token.isAdmin;
            }
            return session;
          },
        authorized({auth, request}:any){
            const user = auth?.user;
            //check if the user is on a certain page
            const isOnAdminPage = request.nextUrl?.pathname.startsWith('/admin');
            const isOnLoginPage = request.nextUrl?.pathname.startsWith('/login');
            const isOnRegisterPage = request.nextUrl?.pathname.startsWith('/register');
            const isOnHomePage = request.nextUrl?.pathname==='/';
            

            if(isOnLoginPage && user){

                return Response.redirect(new URL("/", request.nextUrl))
                
            }

            if(isOnRegisterPage && !user){
                return false;
            }
            if(isOnAdminPage && !user?.isAdmin){
                return false;
            }
            if(isOnLoginPage && user){
                return false;
            }
            if(isOnHomePage && !user){
                return false;
            }
          
            return true;
        }
    }
};