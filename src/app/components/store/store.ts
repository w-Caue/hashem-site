import { Component } from '@angular/core';

interface Produto {
  nome: string;
  categoria: string;
  descricao: string;
  imagem: string;
  preco?: string;
}

@Component({
  selector: 'app-store',
  imports: [],
  templateUrl: './store.html',
  styleUrl: './store.css',
})
export class Store {

  private readonly telefoneWhatsApp = '5585992705922';

  readonly whatsappGeral = this.criarLink(
    'Olá! Gostaria de conhecer os produtos oficiais da HaShem Artes Marciais.',
  );

  produtos: Produto[] = [
    {
      nome: 'Camiseta de Treino',
      categoria: 'Treino',
      descricao: 'HashGuard oficial para representar nossa equipe dentro e fora da academia.',
      imagem: 'img/store/camiseta-frente.png',
      preco: '',
    },
    {
      nome: 'Kit HaShem',
      categoria: 'Kit oficial',
      descricao: 'Use o kit da Hashem para treinar da melhor forma.',
      imagem: 'img/store/kit.jpeg',
      preco: '',
    },
  ];

  gerarLinkWhatsApp(produto: Produto): string {
    const mensagem =
      `Olá! Tenho interesse no produto ${produto.nome} da HaShem Artes Marciais. ` +
      'Gostaria de saber o preço, os tamanhos disponíveis e como comprar.';

    return this.criarLink(mensagem);
  }

  private criarLink(mensagem: string): string {
    return `https://wa.me/${this.telefoneWhatsApp}?text=${encodeURIComponent(mensagem)}`;
  }
}
