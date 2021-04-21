
const listaDePosts = [];


function cadastrarPosts() {
    let cadastro = document.getElementsByTagName('body')

    cadastro[0].innerHTML =
        `
    <button onclick="cadastrarPosts()">Cadastrar Post</button>
    <button onclick="verPosts()">Ver Posts</button>
    
    <section id="formulario">
        <label for="titulo-post">Título:</label>
        <input type="text" id="titulo-post" maxlength="100">

        <label for="autor-post">Autor:</label>
        <input type="text" id="autor-post">

        <label for="conteudo-post">Conteúdo:</label>
        <textarea id="conteudo-post" cols="30" rows="10" maxlength="500"></textarea>

        <label for="imagem-post">Link da imagem destacada:</label>
        <input type="text" id="imagem-post">
    
        <button onclick="incluirPost()">Criar Post</button>
    </section>
    `

    console.log(cadastro);
}

function verPosts() {

    if (listaDePosts.length === 0) {
        alert("Ainda não existem posts cadastrados.")
    }

    let blog = document.getElementsByTagName('body')

    blog[0].innerHTML =
        `
    <button onclick="cadastrarPosts()">Cadastrar Post</button>
    <button onclick="verPosts()">Ver Posts</button>
    
    <section id="container-de-posts">
        
    </section>
    `

    publicarBlog()
}

function incluirPost() {
    const tituloDoPost = document.getElementById('titulo-post').value
    const autorDoPost = document.getElementById('autor-post').value
    const conteudoDoPost = document.getElementById('conteudo-post').value
    const imagemDoPost = verificaImagem(document.getElementById('imagem-post').value)

    if (imagemDoPost === false) {
        alert('Link de imagem inválido');
        return
    } else {
        if (tituloDoPost.length > 0 && autorDoPost.length > 0 && conteudoDoPost.length > 0) {
    
            postAdicionado = capturarEntradasUsuario(tituloDoPost, autorDoPost, conteudoDoPost, imagemDoPost) //retorna objeto
            listaDePosts.push(postAdicionado);
            limparInputs()
    
        } else {
            alert('Por favor, preencha todos os campos');
            return
        }
    }

    console.log(listaDePosts)
}

function verificaImagem(linkImagem) {
    if (linkImagem.includes('http') && (linkImagem.toLowerCase().includes('.jpg') || linkImagem.toLowerCase().includes('.jpeg') || linkImagem.toLowerCase().includes('.png'))) {
        return linkImagem
    } else {
        return false
    }
}

function capturarEntradasUsuario(titulo, autor, conteudo, imagem) {
    const post = {
        titulo: titulo,
        autor: autor,
        conteudo: conteudo,
        imagem: imagem
    }
    return post
}

function limparInputs() {
    document.getElementById('titulo-post').value = ""
    document.getElementById('autor-post').value = ""
    document.getElementById('conteudo-post').value = ""
    document.getElementById('imagem-post').value = ""
}

function publicarBlog() {
    let containerDePosts = document.getElementById('container-de-posts')

    for (post in listaDePosts) {
        containerDePosts.innerHTML +=
            `
        <div class="card-post"> 
        <img src="${listaDePosts[post].imagem}">
        <h1>${listaDePosts[post].titulo}</h1>
        <h5>${listaDePosts[post].autor}</h5>
        <p>${listaDePosts[post].conteudo}</p> 
        </div>
        `
    }
}