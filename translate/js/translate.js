$(document).ready(function() {
  // Replace with your DeepL API key
  const apiKey = 'f0830232-1c31-44d0-aedf-5a564b497998:fx';

  // document.getElementById('stuur').addEventListener('click', async () => {
  //   console.log("gedrukt");
  //   const output = document.getElementById('translated');
  //   const language = document.getElementById('country').value.split('-');

  //   let targetLangValue = "";

  //   if(language[0] == "ZHTW") {
  //     targetLangValue = "ZH-TW";
  //   } else if(language[0] == "PTBR") {
  //     targetLangValue = "PT-BR";
  //   } else {
  //     targetLangValue = language[0];
  //   }

  //   const textValue = document.getElementById('translate').textContent || document.getElementById('translate').innerText;

  //   if (targetLangValue !== '' && textValue !== '') {
  //     try {
  //       const response = await fetch('https://api-free.deepl.com/v2/translate', {
  //         method: 'POST',
  //         headers: {
  //           'Authorization': `DeepL-Auth-Key ${apiKey}`,
  //           'Content-Type': 'application/x-www-form-urlencoded',
  //         },
  //         body: `text=${encodeURIComponent(textValue)}&target_lang=${encodeURIComponent(targetLangValue)}`,
  //       });

  //       if (!response.ok) {
  //         throw new Error(`Network response was not ok: ${response.status}`);
  //       }

  //       const data = await response.json();
  //       console.log(`Translated text: ${data.translations[0].text}`);
  //       output.textContent = data.translations[0].text;
  //       // Access other translation properties as needed
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   }
  // });

  $("#stuur").click(function() {
    console.log("gedrukt");
    var sourceLanguage = document.getElementById('sourceCountry');

    var sourceLang = sourceLanguage.value.split("-");

    let sourceLangValue = "";

    if(sourceLang[0] == "ZHTW") {
      sourceLangValue = "ZH-TW";
    } else if(sourceLang[0] == "PTBR") {
      sourceLangValue = "PT-BR";
    } else {
      sourceLangValue = sourceLang[0];
    }

    var targetLanguage = document.getElementById('targetCountry');

    var targetLang = targetLanguage.value.split("-");

    let targetLangValue = "";

    if(targetLang[0] == "ZHTW") {
      targetLangValue = "ZH-TW";
    } else if(targetLang[0] == "PTBR") {
      targetLangValue = "PT-BR";
    } else {
      targetLangValue = targetLang[0];
    }

    var text = document.getElementById('translate');
    const textValue = text.value;

    console.log(textValue);
    console.log(targetLangValue);
    console.log(sourceLangValue);

    if (targetLangValue != "" && textValue != "" && sourceLangValue != "") {
      $.ajax({
        url: 'https://api-free.deepl.com/v2/translate',
        method: 'POST',
        headers: {
          'Authorization': `DeepL-Auth-Key ${apiKey}`,
          'Content-Type': 'application/json'
        },
        data: {
          text: encodeURIComponent(textValue),
          source_lang: encodeURIComponent(sourceLangValue),
          target_lang: encodeURIComponent(targetLangValue)
        },
        success: function(data) {
          console.log(data);
          console.log(`Translated text: ${data.translations[0].text}`);
          // Access other translation properties as needed
        },
        error: function(error) {
          console.error('Error:', error);
        }
      });
    }
  });
});


function copyText(textToCopyID) {
  // input met de meegegeven id
  var copyText = document.getElementById(textToCopyID);

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  
  console.log(copyText.value);
}

function updateLanguage(source_lang, output) {
  var language = document.getElementById(source_lang);
  var taalShow = document.getElementById(output);

  // Check if language.value is empty
  if (language.value !== "") {
    var langValue = language.value.split("-");
    taalShow.innerHTML = langValue[1];
  } else {
    taalShow.innerHTML = ""; // Set to empty string if no value
  }
}