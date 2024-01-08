var isPlayerActive = false;

function openModal(videoURL) {
    if (!isPlayerActive) {
        var modal = document.getElementById("myModal");
        var iframe = modal.querySelector('iframe');

        iframe.src = videoURL;
        modal.style.display = "flex";
        isPlayerActive = true;
    }
}

function closeModal() {
    var modal = document.getElementById("myModal");
    var iframe = modal.querySelector('iframe');

    iframe.src = '';
    modal.style.display = "none";
    isPlayerActive = false;
}

// Fecha o modal ao clicar fora do vídeo
window.onclick = function (event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal) {
        closeModal();
    }
};

function searchChannels() {
    var input, filter, channels, channel, h2, i, txtValue;
    input = document.querySelector(".search-bar");
    filter = input.value.toUpperCase();
    channels = document.querySelectorAll(".channel");

    channels.forEach(function (channel) {
        h2 = channel.querySelector("h2");
        txtValue = h2.textContent || h2.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            channel.style.display = "";
        } else {
            channel.style.display = "none";
        }
    });
}
