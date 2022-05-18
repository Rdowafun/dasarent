import IMask from 'imask';

try{
  var element = document.getElementById('phone');
  var maskOptions = {
    mask: '+{998}(00)000-00-00'
  };

  var Masks = document.querySelectorAll('.mask');

  var footerMaskOptions = {
    mask: '+000 (00)000-00-00'
  }
  for (let i = 0; i < Masks.length; i++) {
    var allMask = Masks[i];
  }


   var footerMask = IMask(allMask, footerMaskOptions);


   var mask = IMask(element, maskOptions);
}catch(e){
   console.log('Mask');
}
