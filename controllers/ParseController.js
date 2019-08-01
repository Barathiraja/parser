

module.exports.ParseClientData = (req, res, next) => {
    if (!req.body) {
        return res.status(400).send("Please provide request body");
    }
    var f, l, clientId;
    var str = req.body.data;
    var identifierOne = "0000";
    var identifierTwo = "000";
    var first = str.indexOf(identifierOne);
    var second = str.lastIndexOf(identifierTwo);
    // console.log(first,second);
    if (!req.header.isv1) {
        f = str.slice(0, first + identifierOne.length);
        l = str.slice(first + identifierOne.length, second + identifierTwo.length);
        clientId = str.slice(second + identifierTwo.length, str.length);
        clientId = clientId.slice(0,3) + '-' + clientId.slice(3);
    } else {
        f = str.slice(0, first);
        l = str.slice(first + identifierOne.length, second);
        clientId = str.slice(second + identifierTwo.length, str.length);
      
    }
    var data = { statusCode: 200, data: { firstName: f, lastName: l, clientId: clientId } };
    res.status(200).send(data);
}