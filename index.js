let iframe = document.getElementsByTagName('iframe')[0]

iframe.onload = () => {
    iframe.classList.remove('loading');
}