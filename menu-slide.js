var elements = document.getElementsByClassName('single-line-name');

                function removerEstiloAbas(){
                    var abasSelecao = document.getElementsByClassName('single-line-name');

                    for(var i = 0; i < abasSelecao.length; i++){
                        abasSelecao[i].children[0].style.display = "none";
                        abasSelecao[i].children[1].style.fontWeight = "normal";
                    }
                }

                var alternarAbas = function(){
                   var aba = this.getAttribute('aba');

                   var element = document.getElementById(aba);

                    //remover estilo da seleção de abas.
                    removerEstiloAbas();


                    //ocultar todas as abas.
                    document.getElementById('publicacoes').style.display = "none";
                    document.getElementById('igtv').style.display = "none";
                    document.getElementById('salvos').style.display = "none";

                    //Mostrar aba que estava oculta.
                   element.style.display = "block";

                    //Adicionar classe para troca de aba.

                    this.children[0].style.display = "block";
                    if(element === 'igtv'){
                        this.children[0].style.width = "50px";
                    }
                    this.children[1].style.fontWeight = "bold";

                }

               for(var i = 0; i < elements.length; i++){
                    elements[i].addEventListener('click', alternarAbas,false);
               }