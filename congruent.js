/*                            C O N G R U E N T - 2 0 1 6
 *                            ===========================
 * Congruent is a collaborative review  process  that utilizes [Jargon: a technical
 * framework] that enables authors to write more concise  sentences and phrases for
 * their works. Congruent, as a process allow authors to ensure standards are clear
 * to improve quality and performance while promoting original intent.
 *
 * There are several Congruent {objects} which are necessary to remain uniform and 
 * Congruent. These Congruent headings are the Abstract, Disclaimer, and Copyright.
 * These topic headings will be maintained by Congruent in the below Congruent.obj
*/
var Congruent = {
  "Abstract": {
    "Draft": [
      "A draft article is the fist step in the Congruent process and is considered an opinion piece. It is possible for a draft article to stand on its own. However, it becomes stronger once it receives a peer review and collaborated into a Congruent status. A Congruent document is considered a very reliable source."
    ],
    "Review": [
      "An article with a Review status is the second step in the Congruent process and is considered a collaborated effort between two professionals. An article in a Review status is able to stand on its own. However, it becomes stronger once it is reviewed at least by another third peer and collaborated into as Congruent. A article with a Review status is dependable, a Congruent document is considered a very reliable source."
    ],
    "Congruent": [
      ""
    ]
  },
  "Disclaimer": [
    "The intent of this document is to share best practices and standards. The information contained within this document is published in good faith and for general information purposes only. There are no warranties about the completeness, reliability, and/or accuracy of this information. Please be advised that risk and discretion must be considered before utilizing information within this document."
  ],
  "Copyright": [
    "Congruent is a professional interpretation of applicable federal laws, Executive Orders, directives, policies, regulations, standards, and guidance to include other authors works. Congruent authors reference and cite the work their articles are based, and credit any copyrighted works. The work of Congruent authors are their own."
  ]
}
/* random Jargon rules {json object} with javascript
 * The Congruent process relies solely on the Jargon Framework and therefore
 * it is important to include the Jargon rule frames within this Congruent
 * container for reference. This json object contains the nine Jargon Rule Frames 
 * from: https://github.com/chaffin/Jargon  
*/
var jargon = [
  {
    "rule": "1. Rule frame [morpheme]",
    "jargon": "There are [morpheme] that Jargon recognizes as beneficial to always frame. The author has the option to add more or less to ensure their work is comprehensible. This rule states that the morpheme's [and], [but], [if], [no], [not], [or], [will] are all identified by Jargon as key morphemes that should be framed, [or not]."
  },
  {
    "rule": "2. Rule frame [morpheme:define]",
    "jargon": "Sometimes a word means something to one person, and something different to another. This frame rule allows the author to add a [few:not greater than four] words to ensure the meaning. Yes, that is Jargon defining \"few\" as meaning the maximum number of words to use when applying this rule."
  },
  {
    "rule": "3. Rule frame [#morpheme]",
    "jargon": "Jargon is not intended to [#create] fluffy bloated [#sentences]. This rule allows the [#author] to hash-tag words for use latter in the same [writing|#sentences] to make [their|#author] statements more clear and [show|#create] relationships."
  },
  {
    "rule": "4. Rule frame [morpheme|#morpheme]",
    "jargon": "Tagging a morpheme with a hash in rule three is much like [#setting] a variable. As the reader moves along a sentence they will find the hash tagged morpheme again, and realize that the author is [linking|#setting] a relationship."
  },
  {
    "rule": "5. Rule frame [morpheme|related]",
    "jargon": "This Jargon rule frame is [similar|related] to rule [two|2] with emphasis on related. There are [6|six] Jargon frames within this rule that fully [displays|shows] this rule frame in action. The reader will [notice|see] the relationships to fully [understand|realize] the author's intent."
  },
  {
    "rule": "6. Rule frame [morpheme(synonym)]",
    "jargon": "This rule frame [necessitates(requires)] the morpheme contains its synonym. Doing so allows the [author(writer)] to [hone(sharpen)] their words to ensure meaning is clearly understood. Do not [mistake(error)] this rule with rule frame [5|five], which they are not related."
  },
  {
    "rule": "7. Rule frame [morpheme|related(synonym)]",
    "jargon": "This rule frame [combines|adds(appends)] rule frames five and six. There is nothing better to [say|talk(verbalize)] about it."
  },
  {
    "rule": "8. Rule frame [morpheme|~unrelated]",
    "jargon": "This rule frame is [opposite|~similar] to rule frame five. The [author|~reader] chooses the morpheme to [negate|~add], rather than frame. This rule allows the author to completely rule-out any stray thoughts the reader may form while understanding the work. Remember, Jargon [rules|~recommendations]."
  },
  {
    "rule": "9. Rule frame [morpheme|*example]",
    "jargon": "There are some morphemes that require examples in order to clarify meaning. This rule frame relies on [short|*small;*quickly stated;*pointed] examples to frame a morpheme more clearly. Unlike rule frame two, this rule frame is not defined but rather an example, which is similar to the grammar rule that utilizes Latin (e.g. for example; for the sake of example; such as)."
  }
]
function myFunction() {
  var x = Math.floor((Math.random() * 8) + 1);
  document.getElementById("quote").innerHTML = "<h4>" + (jargon[x].rule) + "</h4><p>" + (jargon[x].jargon.replace(/\[/g, "[<code>").replace(/\]/g, "</code>]")) + "</p>";
}
/*
 * Slidemenu - Jason Howmans
 * http://codepen.io/jasonhowmans/pen/dykhL/
 * Congruent Slidemenu inspired by the works of Jason Howmans.
 * HTML and CSS hacked to provide style and functionality for
 * Congruent. Howmans javascript was wrapped using jQuery's 
 * $(document).ready(funtion) to ensure it activated after all
 * included files fully loaded.
 * Thanks Jason:http://codepen.io/jasonhowmans/
*/ 
$(document).ready(function() {
  var $body = document.body,
   $menu_trigger = $body.getElementsByClassName('menu-trigger')[0];
    if (typeof $menu_trigger !== 'undefined') {
     $menu_trigger.addEventListener('click', function() {
     $body.className = ($body.className == 'menu-active') ? '' :'menu-active';
     });
   }
});
/*
 * .slideToggle() - jQuery 
 * Congruent utilizes jQuery .sligToggle() function to display and hide
 * matched elements with a sliding motion. The element classes that are
 * displayed or hidden match Congruent's (.rule) and (.jargon) classes 
 * http://api.jquery.com/slideToggle/
*/
$(document).ready(function() {
    $(".jargon").slideUp(0);
    $(".rule").click(function() {
        $(this).next(".jargon").slideToggle("slow");
    });
    $(".expand").click(function() {
        $(".jargon").slideDown();
    });
    $(".closeall").click(function() {
        $(".jargon").slideUp();
    });
});
