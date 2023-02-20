import HomePage from "~/Pages/Home";
import ViewsPage from "~/Pages/Views";
import ContactPage from "~/Pages/Contact";
import Profile from "~/Pages/Profile";
import Upload from "~/Pages/Upload";


const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/views', component: ViewsPage },
    { path: '/contact', component: ContactPage },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: null },

]
const privateRoutes = [

]
export { publicRoutes, privateRoutes }