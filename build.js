/*                            C O N G R U E N T - 2 0 1 6
 *                            ===========================
 * Congruent is a collaborative review  process  that utilizes [Jargon: a technical
 * framework] that enables authors to write more concise  sentences and phrases for
 * their works. Congruent, as a process allow authors to ensure standards are clear
 * to improve quality and performance while promoting original intent.
 *
*/
var y = 0;
var n = 0;
var r = [];
var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l"];
document.getElementById("head").innerHTML = "<title>Congruent Formatter<head></title><style>div#page{margin:auto;max-width:48em;color:#303030;font-family:sans-serif;}h1{text-align:center;color:#606060;}textarea{overflow:auto;width:48em;height:250px;border:3px solid #cccccc;padding:5px;font-family:sans-serif;background-color:#ffe;background-position:bottom right;}pre{background-color:#eee}input{background-color:#ffa;}</style></head>";
document.write("<div id=\"page\"><p><h1>Format Congruent File</h1><b>File:</b> " + (json.Metadata.topic) + "<br><b>Date:</b> " + (json.Metadata.Draft.date) + "</p><p><b>Description</b><br> " + (json.Metadata.description) + "</p>");
document.write("<textarea wrap=\"soft\">");
//  metadata
    document.write("<!DOCTYPE html>\n<html>\n<head>\n<title>" + (json.Metadata.topic) + "</title>\n<meta name=\"UID\" content=\"" + (json.Metadata.UID) + "\">\n<meta name=\"topic\" content=\"" + (json.Metadata.topic) + "\">\n<meta name=\"category\" content=\"" + (json.Metadata.category) + "\">\n<meta name=\"description\" content=\"" + (json.Metadata.description) + "\">\n<meta name=\"keywords\" content=\"" + (json.Metadata.keywords) + "\">\n<meta name=\"author\" content=\"" + (json.Metadata.Draft.Author.name) + "\">\n<meta name=\"reviewer\" content=\"" + (json.Metadata.Review.Author.name) + "\">\n<meta name=\"review-date\" content=\"" + (json.Metadata.Review.date) + "\">\n<meta name=\"congruent\" content=\"" + (json.Metadata.Congruent.Author.name) + "\">\n<meta name=\"congruent-date\" content=\"" + (json.Metadata.Congruent.date) + "\">\n<meta name=\"status\" content=\"" + (json.Metadata.status) + "\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<link rel=\"stylesheet\" href=\"congruent.css\">\n<script src=\"http://code.jquery.com/jquery-1.12.2.min.js\"></script>\n<script src=\"congruent.js\"></script>\n</head>\n<body>\n");
// nav
document.write("<nav id=\"slide-menu\">\n<ul>\n<li class=\"abstract\"><a href=\"#abstract\">Abstract</a></li>\n");
for (i in json.Article) {
  if (json.Article[i].heading) {
    document.write("<li class=\"section\"><a href=\"#" + (json.Article[i].heading.toLowerCase().replace(/( )/g, "_")) + "\">" + (json.Article[i].heading) + "</a></li>\n");
 }
}
document.write("<li class=\"disclaimer\"><a href=\"#disclaimer\">Disclaimer</a></li>\n<li class=\"copyright\"><a href=\"#copyright\">Copyright</a></li>\n<li class=\"references\"><a href=\"#references\">References</a></li>\n<li class=\"congruence\"><a href=\"#notes\">Notes</a></li>\n<li class=\"sep congruent\"><a href=\"#congruence\">Congruence</a></li>\n<li class=\"jargon-ico\"><a href=\"#jargon\">Jargon</a></li>\n<li class=\"sep\"></li>\n</ul>\n<div id=\"quote\"></div>\n<footer>\n<p class=\"cong\">CONGRUENT &amp;copy;2016 &amp;middot; Larry Chaffin</p>\n</footer>\n</nav>\n<a id=\"top\"></a>\n<div id=\"content\">\n<div class=\"menu-trigger\"  onclick=\"myFunction()\"></div>\n<div class=\"closeall\"></div>\n<div class=\"expand\"></div>\n<div class=\"page\">\n<div class=\"grid grid-pad\"><div class=\"col-3-4\">UID: " + (json.Metadata.UID) + "</div><div class=\"col-1-4 cong\">" + (json.Metadata.status) + "</div><div class=\"col-3-4\">" + (json.Metadata.category) + "</div><div class=\"col-1-4\">" + (json.Metadata.Draft.date) + "</div>\n</div>\n<p class=\"title\">" + (json.Metadata.topic) + "</p>\n<a id=\"abstract\"></a>\n<p class=\"head\">Abstract</p>\n");
// abstract
var s = json.Metadata.status;
for (i in Congruent.Abstract[s]) {
  document.write("<p class=\"para\">" + (Congruent.Abstract[s][i]) + "</p>\n");
}
// keywords
  document.write("<p id=\"col3\" class=\"para\"><em>Keywords:</em> " + (json.Metadata.keywords) + "</p>\n");
// reference list
  document.write("<p class=\"head\">References</p>\n<p class=\"para\">\n");
for (i in json.References) {
  document.write("<a href=\"#"+ (alpha[i]) +"\">("+ (alpha[i]) +") " + (json.References[i].citation) + "</a><br>\n");
  r.push("(" + (alpha[i]) + ")  " + (json.References[i].citation) + " " + (json.References[i].source));
}
// congruent article
for (i in json.Article) {
  if (json.Article[i].heading) {
    document.write("<a id=\"" + (json.Article[i].heading.toLowerCase().replace(/( )/g, "_")) + "\"></a><p class=\"head\">" + (json.Article[i].heading) + "</p>\n");
      for (k in json.Article[i].Para) {
        document.write("<p class=\"para\">" + (json.Article[i].Para[k]) + "</p>\n");
      }
    }
// jargon and notes
if (json.Article[i].rule) {
 document.write("<p class=\"rule\">" + (json.Article[i].rule) + "</p>\n");
 document.write("<p class=\"jargon\">" + (json.Article[i].jargon.replace(/\[/g, "[<jar>").replace(/\]/g, "</jar>]")));
  if (json.Article[i].note) {
   var x = y + 1;
   document.write("<sup><a id=\"" + (x) + "\" href=\"#id" + (x) + "\">" + (x) + "</a></sup>");
   var y = x;
  }
  document.write("</p>\n");
 }
}
// disclaimer
  document.write("</p>\n<a id=\"disclaimer\"></a>\n<p class=\"head\">Disclaimer</p>\n");
for (i in Congruent.Disclaimer) {
  document.write("<p class=\"para\">" + (Congruent.Disclaimer[i]) + "</p>\n");
}
// copyright
  document.write("<a id=\"copyright\"></a>\n<p class=\"head\">Copyright</p>\n");
for (i in Congruent.Copyright) {
  document.write("<p class=\"para\">" + (Congruent.Copyright[i]) + "</p>\n");
}
// references
 document.write("<div class=\"references\">\n<p class=\"title\"><a id=\"references\">References</a></p>\n");
for (i in json.References) {
 document.write("<a id=\"" + (alpha[i]) + "\"></a>\n<p id=\"col1\" class=\"note\">(" + (alpha[i]) + ") " + (json.References[i].citation) + " " + (json.References[i].source) + "</p>\n");
 }
// notes 
 document.write("</div><div class=\"references\">\n<p class=\"title\"><a id=\"notes\">Notes</a></p>\n");
  for (i in json.Article) {
   if (json.Article[i].note) {
    var x = n + 1;
    document.write("<p id=\"col1\" class=\"note\"><a id=\"id" + (x) + "\"></a><a href=\"#" + (x) + "\"><sup>" + (x) + "</sup></a>" + (json.Article[i].note) + "</p>");
    var n = x;
    }
  }
// congruence
 document.write("</div><div class=\"references\">\n<p class=\"title\"><a id=\"congruence\">Congruence</a></p>\n<div class=\"grid grid-pad\">\n<div class=\"col-1-2\">\n<div class=\"card\">\n<p id=\"col8\" style=\"margin-top:-1rem;\">" + (json.Metadata.UID) + "</p>\n<p id=\"col8\" style=\"margin-top:-1rem;\">Congruent Draft<br>" + (json.Metadata.Draft.date) + "</p>\n<p id=\"col6\">" + (json.Metadata.Draft.Author.name) + "</p>\n<hr>\n<p>" + (json.Metadata.Draft.Author.industry) + "<br>" + (json.Metadata.Draft.Author.title) + "<br>" + (json.Metadata.Draft.Author.contact) + "</p>\n</div>\n</div>\n");
if (json.Metadata.Review.date) {
  document.write("<div class=\"col-1-2\">\n<div class=\"card\">\n<p id=\"col8\" style=\"margin-top:-1rem;\">" + (json.Metadata.UID) + "</p>\n<p id=\"col8\" style=\"margin-top:-1rem;\">Congruent Review<br>" + (json.Metadata.Review.date) + "</p>\n<p id=\"col6\">" + (json.Metadata.Review.Author.name) + "</p>\n<hr>\n<p>" + (json.Metadata.Review.Author.industry) + "<br>" + (json.Metadata.Review.Author.title) + "<br>" + (json.Metadata.Review.Author.contact) + "</p>\n</div>\n</div>\n");
}
if (json.Metadata.Congruent.date) {
  document.write("<div class=\"col-1-2\">\n<div class=\"card\">\n<p id=\"col8\" style=\"margin-top:-1rem;\">" + (json.Metadata.UID) + "</p>\n<p id=\"col8\" style=\"margin-top:-1rem;\">Congruent<br>" + (json.Metadata.Congruent.date) + "</p>\n<p id=\"col6\">" + (json.Metadata.Congruent.Author.name) + "</p>\n<hr>\n<p>" + (json.Metadata.Congruent.Author.industry) + "<br>" + (json.Metadata.Congruent.Author.title) + "<br>" + (json.Metadata.Congruent.Author.contact) + "</p>\n</div>\n</div>\n</div>\n");
} else {
document.write("</div>");
}
// note to self: add loop for congruence 5/22/2016
// Jargon rules
 document.write("</div>\n<div class=\"references\">\n<p class=\"title\"><a id=\"jargon\"><span id=\"jargon-logo\">Jargon Rules</span></a></p>\n");
for (i in jargon) {
  document.write("<p id=\"col0\" class=\"rule\">" + (jargon[i].rule) + "</p><p id=\"col1\" class=\"jargon\">" + (jargon[i].jargon.replace(/\[/g, "[<code>").replace(/\]/g, "</code>]")) + "</p>\n");
}
document.write("</div>\n</div>\n</div>\n</body>\n</html></textarea>");
document.write("<p><span style=\"font-size:130%;color:tomato\">&cong;</span> Copy and paste the above text to a file named: <input type='text' size='40' name='Filename' value='" + (json.Metadata.topic) + ".html'></p>");
if (json.Metadata.UID === null) {
 document.write("<p><span style=\"font-size:130%;color:tomato\">&cong;</span> Copy and paste this <b>UID</b> into your <em><b>json</b></em> file under <kbd>Metadata:UID:</kbd> <input type='text' size='12' name='Date' value='" + (Date.now()) + "'></p>");
}
document.write("</div>");
/*
 *
 * single html file
 *
*/
var y = 0;
var n = 0;
document.write("<hr style=\"height: 16px;border: 0;box-shadow: inset 0 16px 16px -16px rgba(0, 0, 0, 0.5);\"><div id=\"page\"><p><h1>Format Single HTML File</h1><b>File:</b> " + (json.Metadata.topic) + "<br><b>Date:</b> " + (json.Metadata.Draft.date) + "</p><p><b>Description</b><br> " + (json.Metadata.description) + "</p>");
document.write("<textarea rows=\"24\" cols=\"120\" wrap=\"soft\">");
//  metadata
    document.write("<!DOCTYPE html>\n<html>\n<head>\n<title>" + (json.Metadata.topic) + "</title>\n<meta name=\"UID\" content=\"" + (json.Metadata.UID) + "\">\n<meta name=\"topic\" content=\"" + (json.Metadata.topic) + "\">\n<meta name=\"category\" content=\"" + (json.Metadata.category) + "\">\n<meta name=\"description\" content=\"" + (json.Metadata.description) + "\">\n<meta name=\"keywords\" content=\"" + (json.Metadata.keywords) + "\">\n<meta name=\"author\" content=\"" + (json.Metadata.Draft.Author.name) + "\">\n<meta name=\"reviewer\" content=\"" + (json.Metadata.Review.Author.name) + "\">\n<meta name=\"review-date\" content=\"" + (json.Metadata.Review.date) + "\">\n<meta name=\"congruent\" content=\"" + (json.Metadata.Congruent.Author.name) + "\">\n<meta name=\"congruent-date\" content=\"" + (json.Metadata.Congruent.date) + "\">\n<meta name=\"status\" content=\"" + (json.Metadata.status) + "\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n");
    document.write("<script src=\"http://code.jquery.com/jquery-1.12.2.min.js\"></script>\n<style>@media all and (min-width:1088px){body{max-width:48em}}body{font-family:Waree,Calibri;font-size:1.125em;line-height:1.5em}.head{font-weight:700}.jar::before{content:\"\\2261\";margin-right:6px;color:tomato}.jar{text-align:right;color:#222;font-size:80%}.jargon{background-color:#eee;padding:6px;border-radius:5px;font-size:90%}div.references{border-top:1px dashed #333}.ref{text-indent:-2rem}a:link,a:visited{text-decoration:none;color:#333}a:hover{background-color:#eee;border-radius:4px}.col0{margin-left:0}.col1{margin-left:3rem}.col2{margin-left:6rem}.col3{margin-left:9rem}.col4{margin-left:12rem}.col5{text-align:justify;margin-left:6rem;margin-right:3rem}.col6{text-align:center}.col7{margin-left:21rem;margin-right:0}.col8{text-align:right;margin-right:0}[class*='col-']{float:left;line-height:initial}.col-1-1{width:100%}.col-3-4{width:85%}.col-1-2{width:50%}.col-1-4{width:15%}.grid:after{content:\"\";display:table;clear:both}*,*:after,*:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}[class*='col-']{padding-right:20px}[class*='col-']:last-of-type{padding-right:0}.grid-pad \> [class*='col-']:last-of-type{padding-right:20px}.cong::before{content:\"\\2245\";margin-right:6px;color:tomato}</style>\n<script>\n$(document).ready(function() {\n\t$(\".jar-gon\").slideUp(0);\n\t$(\".rule\").click(function() {\n\t\t$(this).next(\".jar-gon\").slideToggle(\"slow\");\n\t\t});\n\t$(\".jargon\").click(function() {\n\t\t$(\".intent\").slideDown();\n\t});\n\t$(\".jar\").click(function() {\n\t$(\".intent\").slideUp();\n\t});\n});\n</script>\n</head>\n<body>\n");
// heading
document.write("<div class=\"grid grid-pad\">\n<div class=\"col-1-2\">" + (json.Metadata.version) + "</div>\n<div class=\"col-1-2 col8 cong\">" + (json.Metadata.status) + "</div>\n<div class=\"col-1-2\">" + (json.Metadata.UID) + "</div>\n<div class=\"col-1-2 col8\">" + (json.Metadata.Draft.date) + "</div>\n</div>\n");
document.write("<p class=\"col6 head\">" + (json.Metadata.topic) + "</p>");
// abstract
  document.write("<p class=\"col0 head\">Abstract</p>\n");
var s = json.Metadata.status;
for (i in Congruent.Abstract[s]) {
  document.write("<p class=\"col1 para\">" + (Congruent.Abstract[s][i]) + "</p>\n");
}
// keywords
  document.write("<p class=\"col3 para\"><em>Keywords:</em> " + (json.Metadata.keywords) + "</p>\n");
// reference list
  document.write("<p class=\"col0 head\"><a id=\"references\">References</a></p>\n<p class=\"col1 para\">\n");
for (i in json.References) {
  document.write("<a href=\"#"+ (alpha[i]) +"\">("+ (alpha[i]) +") " + (json.References[i].citation) + "</a><br>\n");
  r.push("(" + (alpha[i]) + ")  " + (json.References[i].citation) + " " + (json.References[i].source));
}
// congruent article
document.write("<div class=\"grid grid-pad\">\n");
for (i in json.Article) {
  if (json.Article[i].heading) {
    document.write("<a href=\"" + (json.Article[i].heading.toLowerCase().replace(/( )/g, "_")) + "\"></a><p class=\"col0 head\">" + (json.Article[i].heading) + "</p>\n");
      for (k in json.Article[i].Para) {
        document.write("<p class=\"col1 para\">" + (json.Article[i].Para[k]) + "</p>\n");
      }
    }
// jargon and notes
if (json.Article[i].rule) {
 document.write("<p class=\"col1 para rule\">" + (json.Article[i].rule) + "</p>\n");
 document.write("<div class=\"jar-gon\">\n<div class=\"col-1-4 jar\">Jargon</div>\n<div class=\"col-3-4 jargon\">" + (json.Article[i].jargon));
  if (json.Article[i].note) {
   var x = y + 1;
   document.write("<sup><a id=\"" + (x) + "\" href=\"#id" + (x) + "\">" + (x) + "</a></sup>");
   var y = x;
  }
  document.write("</p>\n</div>\n</div>\n");
 }
}
// disclaimer
  document.write("</p>\n</div>\n</div>\n<p class=\"col0 head\">Disclaimer</p>\n");
for (i in Congruent.Disclaimer) {
  document.write("<p class=\"col1 para\">" + (Congruent.Disclaimer[i]) + "</p>\n");
}
// copyright
  document.write("<p class=\"col0 head\">Copyright</p>\n");
for (i in Congruent.Copyright) {
  document.write("<p class=\"col1 para\">" + (Congruent.Copyright[i]) + "</p>\n");
}
// references
  document.write("<div class=\"references\">\n<p class=\"col6 head\"><a href=\"#references\">References</a></p>\n");
for (i in json.References) {
 document.write("<a id=\"" + (alpha[i]) + "\"></a>\n<p class=\"col1 ref\">(" + (alpha[i]) + ") " + (json.References[i].citation) + " " + (json.References[i].source) + "</p>\n");
 }
// notes 
 document.write("</div><div class=\"references\">\n<p class=\"col6 head\"><a id=\"notes\">Notes</a></p>\n");
  for (i in json.Article) {
   if (json.Article[i].note) {
    var x = n + 1;
    document.write("<p class=\"col1\"><a id=\"id" + (x) + "\"></a><a href=\"#" + (x) + "\"><sup>" + (x) + "</sup></a> " + (json.Article[i].note) + "</p>");
    var n = x;
    }
  }
// note to self: add loop for congruence 5/22/2016
// Jargon rules
document.write("</div>\n</div>\n</div>\n</body>\n</html></textarea>");
document.write("<p><span style=\"font-size:130%;color:tomato\">&cong;</span> Copy and paste the above text to a file named: <input type='text' size='40' name='Filename' value='" + (json.Metadata.topic) + ".html'></p></div>");
/*
 *
 *  groff typeset
 *
*/
var y = 0;
var n = 0;
document.write("<hr style=\"height: 16px;border: 0;box-shadow: inset 0 16px 16px -16px rgba(0, 0, 0, 0.5);\"><div id=\"page\"><p><h1>Format TEXT File</h1><b>File:</b> " + (json.Metadata.topic) + "<br><b>Date:</b> " + (json.Metadata.Draft.date) + "</p><p><b>Description</b><br> " + (json.Metadata.description) + "</p>");
document.write("<textarea rows=\"24\" cols=\"120\" wrap=\"soft\">");
document.write(".TH " + (json.Metadata.version) + " \""+ (json.Metadata.Draft.date) + "\" \"Congruent-" + (json.Metadata.status) + "\" \"" + (json.Metadata.category) + "\"\n.hy 0\n.na\n.in 3\n");
document.write(".ce\n" + (json.Metadata.topic) + "\n.sp 2\n");
// abstract
document.write(".ti 0\nABSTRACT\n.sp\n");
var s = json.Metadata.status;
for (i in Congruent.Abstract[s]) {
  document.write((Congruent.Abstract[s][i]) + "\n");
}
// keywords
  document.write(".sp\n.ti 6\nKeywords:" + (json.Metadata.keywords) + "\n");
// reference list
document.write(".sp 2\n.ti 0\nREFERENCES\n.sp\n.nf\n");
for (i in json.References) {
  document.write((alpha[i])+". " + (json.References[i].citation) + "\n");
  r.push("(" + (alpha[i]) + ")  " + (json.References[i].citation) + " " + (json.References[i].source));
}
document.write(".fi\n");
// congruent article
for (i in json.Article) {
  if (json.Article[i].heading) {
    document.write(".sp 2\n.ti 0\n" + (json.Article[i].heading.toUpperCase()) + "\n");
      for (k in json.Article[i].Para) {
        document.write(".sp\n.in 3\n" + (json.Article[i].Para[k]) + "\n");
      }
    }
// jargon and notes
if (json.Article[i].rule) {
 document.write(".sp 2\n.in 4\n" + (json.Article[i].rule) + "\n");
 document.write(".sp\n.ce\n[JARGON]\n.in 8\n" + (json.Article[i].jargon));
  if (json.Article[i].note) {
   var x = y + 1;
   document.write("[" + (x) + "]");
   var y = x;
  }
  document.write("\n");
 }
}
// disclaimer
document.write(".sp 2\n.ti 0\nDISCLAIMER\n");
for (i in Congruent.Disclaimer) {
  document.write(".sp\n.in\n" + (Congruent.Disclaimer[i]) + "\n");
}
// copyright
  document.write(".sp 2\n.ti 0\nCOPYRIGHT\n");
for (i in Congruent.Copyright) {
  document.write(".sp\n" + (Congruent.Copyright[i]) + "\n");
}
// references
 document.write(".sp 2\n.ti 0\nREFERENCES\n");
for (i in json.References) {
 document.write(".sp\n(" + (alpha[i]) + ") " + (json.References[i].citation) + " " + (json.References[i].source) + "\n");
 }
// notes 
 document.write(".sp 2\n.ti 0\nNOTES\n");
  for (i in json.Article) {
   if (json.Article[i].note) {
    var x = n + 1;
    document.write(".sp\n[" + (x) + "]\t" + (json.Article[i].note) + "\n");
    var n = x;
    }
  }
// congruence
 document.write(".sp 2\n.ce\nCONGRUENCE\n.sp\n.ti 2\nDRAFT\n\.sp\n.nf\n" + (json.Metadata.UID) + "\n" + (json.Metadata.Draft.date) + "\n" + (json.Metadata.Draft.Author.name) + "\n" + (json.Metadata.Draft.Author.industry) + "\n" + (json.Metadata.Draft.Author.title) + "\n" + (json.Metadata.Draft.Author.contact) + "\n");
if (json.Metadata.Review.date) {
  document.write(".fi\n.sp 2\n.ti 2\nREVIEW\n.sp\n.nf\n" + (json.Metadata.UID) + "\nCongruent Review\n" + (json.Metadata.Review.date) + "\n" + (json.Metadata.Review.Author.name) + "\n" + (json.Metadata.Review.Author.industry) + "\n" + (json.Metadata.Review.Author.title) + "\n" + (json.Metadata.Review.Author.contact) + "\n\n");
}
if (json.Metadata.Congruent.date) {
  document.write(".fi\n.sp 2\n.ti 2\nCONGRUENT\n.sp\n.nf\n" + (json.Metadata.UID) + "\nCongruent\n" + (json.Metadata.Congruent.date) + "\n" + (json.Metadata.Congruent.Author.name) + "\n" + (json.Metadata.Congruent.Author.industry) + "\n" + (json.Metadata.Congruent.Author.title) + "\n" + (json.Metadata.Congruent.Author.contact) + "\n\n\n");
} else {
}
document.write(".fi</textarea>");
document.write("<p><span style=\"font-size:130%;color:tomato\">&cong;</span> Copy and paste the above text to a file named: <input type='text' size='40' name='Filename' value='" + (json.Metadata.version.replace(/( )/g, "_")) + ".txt'></p>");
document.write("<p>Convert using groff or troff; typesetting systems that reads plain text mixed with formatting commands and produces formatted output.</p><pre>\n\n\tgroff -mandoc -T latin1 " + (json.Metadata.version.replace(/( )/g, "_")) + ".txt > output.txt\n\n</pre></div>");
/*
 *
 *  markdown text
 *
*/
var y = 0;
var n = 0;
document.write("<hr style=\"height: 16px;border: 0;box-shadow: inset 0 16px 16px -16px rgba(0, 0, 0, 0.5);\"><div id=\"page\"><p><h1>Format Markdown text File</h1><b>File:</b> " + (json.Metadata.topic) + "<br><b>Date:</b> " + (json.Metadata.Draft.date) + "</p><p><b>Description</b><br> " + (json.Metadata.description) + "</p>");
document.write("<textarea rows=\"24\" cols=\"120\" wrap=\"soft\">");
// nav
document.write("#" + (json.Metadata.topic) + "\n\n");
for (i in json.Article) {
  if (json.Article[i].heading) {
    document.write("* [" + (json.Article[i].heading) + "] (#" + (json.Article[i].heading.toLowerCase().replace(/( )/g, "-")) + ")\n");
 }
}
document.write("* [Disclaimer] (#Disclaimer)\n* [Copyright] (#Copyright)\n* [References] (#References)\n* [Notes] (#Notes)\n* [Congruence] (#Congruence)\n");
// abstract
var s = json.Metadata.status;
for (i in Congruent.Abstract[s]) {
  document.write("\n#ABSTRACT\n\n" + (Congruent.Abstract[s][i]) + "\n\n");
}
// keywords
  document.write("> *Keywords*: " + (json.Metadata.keywords) + "\n");
// reference list
  document.write("\n#References\n\n");
for (i in json.References) {
  document.write((alpha[i]) + ". [" + (json.References[i].citation) + "] (#" + (alpha[i]) + ")\n");
  r.push("(" + (alpha[i]) + ")  " + (json.References[i].citation) + " " + (json.References[i].source));
}
// congruent article
for (i in json.Article) {
  if (json.Article[i].heading) {
    document.write("\n#" + (json.Article[i].heading) + "\n\n");
      for (k in json.Article[i].Para) {
        document.write((json.Article[i].Para[k]) + "\n\n");
      }
    }
// jargon and notes
if (json.Article[i].rule) {
 document.write("**" + (json.Article[i].rule) + "**\n\n");
 document.write(">&equiv;&nbsp;&nbsp;" + (json.Article[i].jargon));
  if (json.Article[i].note) {
   var x = y + 1;
   document.write("<sup><a id=\"" + (x) + "\" href=\"#id" + (x) + "\">" + (x) + "</a></sup>");
   var y = x;
  }
  document.write("\n\n");
 }
}
// disclaimer
  document.write("#Disclaimer\n\n");
for (i in Congruent.Disclaimer) {
  document.write((Congruent.Disclaimer[i]) + "\n\n");
}
// copyright
  document.write("#Copyright\n\n");
for (i in Congruent.Copyright) {
  document.write((Congruent.Copyright[i]) + "\n\n");
}
// references
 document.write("#References\n\n");
for (i in json.References) {
 document.write("<a id=\"" + (alpha[i]) + "\"></a>\n<p id=\"col1\" class=\"note\">(" + (alpha[i]) + ") " + (json.References[i].citation) + " " + (json.References[i].source) + "</p>\n");
 }
// notes 
 document.write("</div><div class=\"references\">\n<p class=\"title\"><a id=\"notes\">Notes</a></p>\n");
  for (i in json.Article) {
   if (json.Article[i].note) {
    var x = n + 1;
    document.write("<p id=\"col1\" class=\"note\"><a id=\"id" + (x) + "\"></a><a href=\"#" + (x) + "\"><sup>" + (x) + "</sup></a>" + (json.Article[i].note) + "</p>");
    var n = x;
    }
  }
// congruence
 document.write("</div><div class=\"references\">\n<p class=\"title\"><a id=\"congruence\">Congruence</a></p>\n<div class=\"grid grid-pad\">\n<div class=\"col-1-2\">\n<div class=\"card\">\n<p id=\"col8\" style=\"margin-top:-1rem;\">" + (json.Metadata.UID) + "</p>\n<p id=\"col8\" style=\"margin-top:-1rem;\">Congruent Draft<br>" + (json.Metadata.Draft.date) + "</p>\n<p id=\"col6\">" + (json.Metadata.Draft.Author.name) + "</p>\n<hr>\n<p>" + (json.Metadata.Draft.Author.industry) + "<br>" + (json.Metadata.Draft.Author.title) + "<br>" + (json.Metadata.Draft.Author.contact) + "</p>\n</div>\n</div>\n");
if (json.Metadata.Review.date) {
  document.write("<div class=\"col-1-2\">\n<div class=\"card\">\n<p id=\"col8\" style=\"margin-top:-1rem;\">" + (json.Metadata.UID) + "</p>\n<p id=\"col8\" style=\"margin-top:-1rem;\">Congruent Review<br>" + (json.Metadata.Review.date) + "</p>\n<p id=\"col6\">" + (json.Metadata.Review.Author.name) + "</p>\n<hr>\n<p>" + (json.Metadata.Review.Author.industry) + "<br>" + (json.Metadata.Review.Author.title) + "<br>" + (json.Metadata.Review.Author.contact) + "</p>\n</div>\n</div>\n");
}
if (json.Metadata.Congruent.date) {
  document.write("<div class=\"col-1-2\">\n<div class=\"card\">\n<p id=\"col8\" style=\"margin-top:-1rem;\">" + (json.Metadata.UID) + "</p>\n<p id=\"col8\" style=\"margin-top:-1rem;\">Congruent<br>" + (json.Metadata.Congruent.date) + "</p>\n<p id=\"col6\">" + (json.Metadata.Congruent.Author.name) + "</p>\n<hr>\n<p>" + (json.Metadata.Congruent.Author.industry) + "<br>" + (json.Metadata.Congruent.Author.title) + "<br>" + (json.Metadata.Congruent.Author.contact) + "</p>\n</div>\n</div>\n</div>\n");
} else {
document.write("</div>");
}
document.write("</textarea>");
document.write("<p><span style=\"font-size:130%;color:tomato\">&cong;</span> Copy and paste the above text to a file named: <input type='text' size='40' name='Filename' value='" + (json.Metadata.topic.replace(/( )/g, "_")) + ".md'></p>");
