import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Cards } from '../../components/cards/cards';
import { About } from '../../components/about/about';
import { Modalities } from '../../components/modalities/modalities';
import { Testimonials } from '../../components/testimonials/testimonials';
import { Plans } from '../../components/plans/plans';
import { Cta } from '../../components/cta/cta';
import { Footer } from '../../components/footer/footer';
import { Store } from '../../components/store/store';

@Component({
  selector: 'app-home',
  imports: [Header, Cards, About, Modalities, Testimonials, Plans, Cta, Footer, Store],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
