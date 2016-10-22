function excluiTempo(legenda) {
    var regex = /[0-9]+\n[0-9,:]{10,12} --> [0-9,:]{10,12}/gm;
    return legenda.replace(regex, "");
}

function excluiQuebradp(legenda) {
    var regex = /(\n)+/g;
    return legenda.replace(regex, "\n");
}

function excluiQuebra(legenda) {
    var regex = /(\n)+/g;
    return legenda.replace(regex, " ");
}

function excluiTags(legenda) {
    var regex = /<.*?>/g;
    return legenda.replace(regex, "");
}

$(function () {
    $("#btn").click(function () {
        var legenda = $("#entrada").val();

        var verificacao1 = $("#excluirnumcb:checked").length;
        var verificacao2 = $("#excluirtagscb:checked").length;
        var verificacao3 = $("#excluirquebradpcb:checked").length;
        var verificacao4 = $("#excluirquebracb:checked").length;

        if (verificacao1) {
            legenda = excluiTempo(legenda);
        }
        if (verificacao2) {
            legenda = excluiTags(legenda);
        }
        if (verificacao3) {
            legenda = excluiQuebradp(legenda);
        }
        if (verificacao4) {
            legenda = excluiQuebra(legenda);
        }

        $("#saida").val(legenda);
    })
});