
document.write('ahb acb aeb aeeb adcb axeb'.replace(/a.b/g, '!')+'<br>');
document.write('aba aca aea abba adca abea'.replace(/a..a/g, '!')+'<br>');
document.write('aba aca aea abba adca abea'.replace(/ab.a/g, '!')+'<br>');
document.write('aa aba abba abbba abca abea'.replace(/ab+a/g, '!')+'<br>');
document.write('aa aba abba abbba abca abea'.replace(/ab*a/g, '!')+'<br>');
document.write('aa aba abba abbba abca abea'.replace(/ab?a/g, '!')+'<br>');