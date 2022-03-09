var x = prompt("Birinchi sonni kiriting: ")
var a = prompt("Amalni kiriting ( + ), ( - ), ( * ), ( /    ): ")
var y = prompt("Ikkinchi kiriting: ")

document.write( '<p>' + x + '  ' + a + '  ' + y + '  ' + ' = ' + eval (x + a + y) );