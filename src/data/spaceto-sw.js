var fs = require('fs')
var space = require('./space.json')
var attrs = require('./attributeTypes.json')

var spaceattrs = space.attributes.flatMap(at => at.skills.map(skill => Object.assign({}, skill, {attribute: at.name.toLowerCase()})))
var spaceabs = spaceattrs.reduce(
  (prev, curr) => (prev.includes(curr.attribute) ? prev : prev.concat([curr.attribute])),
  [])

attrs['space'] = {"attributes": spaceabs, skills: spaceattrs}
// attrs['space']['skills'] = spaceattrs

fs.writeFileSync('attributeTypes.bak.json', JSON.stringify(attrs, null, 2))