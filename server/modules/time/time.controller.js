var mongoose = require('mongoose')
var Time = mongoose.model('Time')
var xlsx = require('node-xlsx')
var path = require('path')
var fs = require('fs')
var uuid = require('node-uuid')

exports.build = function (req, res) {
  var data = req.body.build || [[1, 2, 3], [true, false, null, 'sheetjs'], ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']]
  var buffer = xlsx.build([{name: 'Time Sheet', data: data}]) // returns a buffer
  fs.writeFile(path.join(__dirname, '../../../client/uploads/timesheet.xlsx'), buffer, function (err) {
    if (err) throw err
  // res.download('client/uploads/'+uuid.v4()+'.xlsx')
  })
  res.status(201).send({url: '/uploads/timesheet.xlsx'}); // res.status(200).send()
}
