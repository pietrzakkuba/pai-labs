function isWhiteSpaceOrEmpty(text) {
    return /^[\s\t\r\n]*$/.test(text);
}

function isNotEmail(text) {
    return !(/^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/.test(text))
}

function checkStringAndFocus(obj, msg, validation_function) {
    let str = obj.value;
    let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
    if (validation_function(str)) {
        document.getElementById(errorFieldName).innerHTML = msg;
        obj.focus();
        return false;
    }
    else {
        document.getElementById(errorFieldName).innerHTML = "";
        return true;
    }
}

function validate(form) {
    let checker = array => array.every(v => v)
    validation_array = []
    validation_array.push(checkStringAndFocus(form.elements["f_imie"], "Podaj imię!", isWhiteSpaceOrEmpty))
    validation_array.push(checkStringAndFocus(form.elements["f_nazwisko"], "Podaj nazwisko!", isWhiteSpaceOrEmpty))
    validation_array.push(checkStringAndFocus(form.elements["f_email"], "Podaj poprawny e-mail!", isNotEmail))
    validation_array.push(checkStringAndFocus(form.elements["f_kod"], "Podaj kod pocztowy!", isWhiteSpaceOrEmpty))
    validation_array.push(checkStringAndFocus(form.elements["f_ulica"], "Podaj ulicę/osiedle!", isWhiteSpaceOrEmpty))
    validation_array.push(checkStringAndFocus(form.elements["f_miasto"], "Podaj miasto!", isWhiteSpaceOrEmpty))
    return checker(validation_array)
}

function showElement(e) {
    document.getElementById(e).style.visibility = 'visible'
}
   
function hideElement(e) {
    document.getElementById(e).style.visibility = 'collapse'
}

function alterRows(i, e) {
    if (e) {
        if (i % 2 == 1) {
            e.setAttribute("style", "background-color: Aqua;");
        }
        e = e.nextSibling;
        while (e && e.nodeType != 1) {
            e = e.nextSibling;
        }
        alterRows(++i, e);
    }
}
function nextNode(e) {
    while (e && e.nodeType != 1) {
        e = e.nextSibling;
    }
    return e;
}

function prevNode(e) {
    while (e && e.nodeType != 1) {
        e = e.previousSibling;
    }
    return e;
}

function swapRows(b) {
    let tab = prevNode(b.previousSibling);
    let tBody = nextNode(tab.firstChild);
    let lastNode = prevNode(tBody.lastChild);
    tBody.removeChild(lastNode);
    let firstNode = nextNode(tBody.firstChild);
    tBody.insertBefore(lastNode, firstNode);
}

function cnt(form, msg, maxSize) {
    if (form.value.length > maxSize)
        form.value = form.value.substring(0, maxSize);
    else
        msg.innerHTML = maxSize - form.value.length;
}
   

window.onload = function() {
    alterRows(1, this.document.getElementsByTagName('tr')[0])
}
