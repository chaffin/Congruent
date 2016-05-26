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
document.getElementById("head").innerHTML = "<title>Congruent Formatter<head></title><style>div#page{margin:auto;max-width:48em;color:#303030;font-family:sans-serif;}h1{text-align:center;color:#606060;}textarea{overflow:auto;width:48em;height:500px;border:3px solid #cccccc;padding:5px;font-family:sans-serif;background-color:#ffe;background-position:bottom right;}input{background-color:#ffa;}</style></head>";
document.write("<div id=\"page\"><p><h1>Format Congruent File</h1><b>File:</b> " + (json.Metadata.topic) + "<br><b>Date:</b> " + (json.Metadata.Draft.date) + "</p><p><b>Description</b><br> " + (json.Metadata.description) + "</p>");
document.write("<textarea rows=\"24\" cols=\"120\" wrap=\"soft\">");
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
