# Trikoder front-end zadatak
Potrebno je dovršiti nekolicinu zadatka na pripremljenoj statičnoj stranici. Glavni dio stranice je postavljen - html je pripremljen, napisani su css stilovi i interakcije u javascriptu, procesiranje front-end resursa je automatizirano.

Projekt se može preuzeti sa adrese https://gitlab.trikoder.net/hr/frontend-zadatak. Obzirom da je riječ o git repozitoriju - dajemo plus ako zadaće u nastavku rješavate putem lijepo formiranih commit-ova.

## Instalacija
Projekt podesite tako da u konzolu upišete:
```npm install```

Development startate sa komandom:
```npm start```

(U slučaju da vam prethodna naredba ne funkcionira, pokrenite `npm run watch:development`)

## Zadaci
+ Nedostaje nam modul sa galerijom fotografija u desnoj koloni.
Pogledajte kako isti izgleda u priloženom dizajnu (design.png) i pripremite HTML, CSS (SCSS), i JS datoteke.
Kada se klikne na thumbnail trebala bi se pokazati uvećana slika u modalnom prozoru / lightboxu.
Obzirom da Vam prilažemo dizajn kao PNG datoteku modul ne mora biti pixel perfect.
Slike u maloj i velikoj varijaciji možete pronaći u "public/images" direktoriju.

+ Korisnicima bi valjalo pripremiti optimizirane, minificirane slike. Pronađite i upogonite grunt task pomoću
kojeg minifikaciju slika možemo odrađivati automatski.

+ Klikom na "Sign in" gumb u navigaciji pojavljuje se modalni prozor sa login formom.
U trenutnoj (ne baš idealnoj) implementaciji sadržaj (html) te forme se nalazi u skrivenom modulu na dnu stranice koji se klonira prilikom
instanciranja lightbox-a.
Ažurirajte kod tako da se sadržaj forme dohvaća sa url-a (u public direktoriju nalazi se pripremljeni login-modal.html kojeg možete dohvatiti kada treba)

+ Front-end resurse koji nisu neophodni za inicijalno prikazivanje probajte učitati tek kad su korisniku potrebni.
	+ Ažurirajte kod pretrage tako da se plugin za brzu pretragu učitava nakon što korisnik počne upisivati nešto u pretragu
	+ Slično probajte napraviti za galeriju fotografija tako da se lightbox plugin učita nakon što korisnik klikne na neki od thumbnailova
	+ Dodatan plus dobijete ako i CSS resurse za gornje primjere učitavate samo kad je potrebno

## Predaja rješenja
Rješenje nam pošaljite u obliku zip datoteke (ili poveznice na datoteku / repozitorij) na posao@trikoder.net

## Korištene tehnologije
+ [Sass](http://sass-lang.com/) (CSS Preprocessor)
+ [jQuery](https://jquery.com/) (JS library)
+ [Grunt](http://gruntjs.com/) (JS task runner)
+ [webpack](https://webpack.github.io/) (module bundler)
+ [Simple view](http://dbrekalo.github.io/simpleView/) (view component boilerplate)
+ [Simple lightbox](http://dbrekalo.github.io/simpleLightbox/) (lightbox / image modal plugin)
+ [Fast search](https://github.com/dbrekalo/fastsearch) (quick search / autocomplete plugin)

---

# Trikoder front-end assignment
A few tasks need to be completed on a prepared static webpage. The main part of the page is completed - html is prepared, css styles and js interactions are written, and processing of front-end resources is automated.

The project can be downloaded from: https://gitlab.trikoder.net/hr/frontend-zadatak. Considering it is a git repository - you will get extra points if you solve the  assignment with nicely formed commits.

## Installation
Setup project with: 
```npm install```

Start development:
```npm start```

(In case the previous command doesn’t work, try `npm run watch:development`)

## Assignment:
+ We are missing a photo gallery module in the right column.
Check attached design (design.png) and prepare HTML, CSS (SCSS), and JS files.
When you click on a thumbnail, a large image should be shown in a modal window / lightbox.
Since the attached design is png format, the module doesn’t have to be pixel perfect. Images in small and large variations can be found in “public/images” directory.

+ Optimized, minified images should be prepared for users. Find and set up a grunt task which will do image minification automatically.

+ Click on the “Sign in” button, and a modal window with login form should appear.
In the current (not ideal) implementation, content (html) of the form is placed in a hidden module at the bottom of the page which gets cloned when the lightbox is created.
Update the code so that content of the form is fetched from a url (in public directory you can find prepared login-modal.html which can be fetched when needed)

+ Front-end resources which are not essential for initial viewing of the page should be loaded only when users need them.

+ Update code for search so that ```fast search plugin``` loads after users start typing in the search box

+ Try to do something similar for the photo gallery, so the lightbox plugin loads after a user clicks on one of the thumbnails

+ Extra points if you load CSS resources for the above examples only when needed

## Sending solution
Send solution as zip file (or link to folder / repository) at posao@trikoder.net

## Used technologies
+ [Sass](http://sass-lang.com/) (CSS Preprocessor)
+ [jQuery](https://jquery.com/) (JS library)
+ [Grunt](http://gruntjs.com/) (JS task runner)
+ [webpack](https://webpack.github.io/) (module bundler)
+ [Simple view](http://dbrekalo.github.io/simpleView/) (view component boilerplate)
+ [Simple lightbox](http://dbrekalo.github.io/simpleLightbox/) (lightbox / image modal plugin)
+ [Fast search](https://github.com/dbrekalo/fastsearch) (quick search / autocomplete plugin)

