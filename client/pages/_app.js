import 'bootstrap/dist/css/bootstrap.css'

// Use this function to wrap all components when they are loaded.
// This is like a decorate for components
// As an example, to apply bootstrap css globally, we will apply here
export default ({Component, pageProps}) =>{
    return <Component {...pageProps}></Component>
}