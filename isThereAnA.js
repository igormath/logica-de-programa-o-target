// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

// String a que se deseja saber quantas letras "a" possui (previamente definida no código).
const stringInput = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt consectetur hendrerit. Cras a velit et velit placerat efficitur sed id lorem. Morbi ultrices velit vel placerat volutpat. Mauris vel odio ac purus bibendum ultricies. Integer semper est sem, eget vestibulum dolor luctus sollicitudin. Vestibulum ut dui semper, rutrum leo.";

const aLetterCheck = (x) => {
    const lowerCaseInput = x.toLowerCase();
    let count = 0;
    for (let i = 0; i < lowerCaseInput.length; i++){
        if (lowerCaseInput.charAt(i) === 'a') count++;
    }

    if (count === 0){
        return "Não existem ocorrências da letra A na string fornecida."
    }

    return `Existem ${count} ocorrências da letra A na string fornecida.`
}

console.log(aLetterCheck(stringInput));
