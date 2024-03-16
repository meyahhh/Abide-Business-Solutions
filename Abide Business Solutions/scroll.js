
function scrollToSection(sectionId) {
   var section = document.getElementById(sectionId);

   if (section) {
       // Calculate the offset of the section from the top of the page
       var offsetTop = section.offsetTop;

       // Scroll to the section with smooth behavior
       window.scrollTo({
           top: offsetTop,
           behavior: 'smooth'
       });
   }
}
