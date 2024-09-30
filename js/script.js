$(document).ready(function () {
    $('#calculatebtn').click(function () {
      const day = parseInt($('#dayInput').val());
      const month = parseInt($('#monthInput').val());
      const year = parseInt($('#yearInput').val());
  
      $('.error').text(''); 
  
      if (isNaN(day) || day < 1 || day > 31) {
        $('#dayInput').next('.error').text('invalid day');
        return;
      }
      if (isNaN(month) || month < 1 || month > 12) {
        $('#monthInput').next('.error').text('invalrd month');
        return;
      }
      if (isNaN(year) || year < 1900 || year > new Date().getFullYear()) {
        $('#yearInput').next('.error').text('invalid year');
        return;
      }
  
      const today = new Date();
      const birthDate = new Date(year, month - 1, day);
  
      let ageYears = today.getFullYear() - birthDate.getFullYear();
      let ageMonths = today.getMonth() - birthDate.getMonth();
      let ageDays = today.getDate() - birthDate.getDate();
  
      if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(year, month, 0).getDate();
      }
  
      if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
      }
  
      $('#yearOutput').text(ageYears);
      $('#monthOutput').text(ageMonths);
      $('#dayOutput').text(ageDays);
    });
  });
  