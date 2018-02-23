export default (app, router) => {
    router.route('/seperateRoute').get((req, res, next) => {
        res.send('OK then');
    });
}