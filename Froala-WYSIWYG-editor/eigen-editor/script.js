function zetTekst() {
    // Input
    const editorContent = document.getElementsByClassName('fr-view')[0].innerHTML;
    // Output
    const outputDiv = document.querySelector('#output');
    outputDiv.innerHTML = editorContent;
}