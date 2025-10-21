# Vue Week 5 — Project README

Dit is de code en demo voor Week 5 van de Vue-cursus.

## Wat bevat dit project
Een kleine Vite + Vue 3 demo-app met een paar componenten, routing en een eenvoudige store.
Deze week ligt de focus op componentenstructuur, props/slots, en het gebruik van een eenvoudige store.

## Doel / leerpunten
- Werken met Vue 3 componenten
- Component-hiërarchie en herbruikbare icons
- Router instellen en views gebruiken
- Een kleine store (reactive state) gebruiken voor shared state
- Project lokaal draaien met Vite

## Belangrijke bestanden
- `index.html` — Vite entry
- `package.json` — npm scripts & dependencies (aangenomen dat dit een standaard Vite project is)
- `vite.config.js` — Vite configuratie
- `src/main.js` — applicatie bootstrap
- `src/App.vue` — root component
- `src/router/index.js` — router config
- `src/stores/counter.js` — eenvoudige store voor de counter
- `src/components/HelloWorld.vue` — voorbeeldcomponent
- `src/components/TheWelcome.vue` — welkom / demo component
- `src/components/WelcomeItem.vue` — een subcomponent gebruikt door TheWelcome
- `src/components/icons/*` — kleine icon components (SVGs)
- `src/views/HomeView.vue` en `src/views/AboutView.vue` — pagina-views voor de router

## Componenten (kort)
- HelloWorld.vue: een demonstratiecomponent waarmee je props en events kunt testen.
- TheWelcome.vue: grotere demo-component die meerdere `WelcomeItem`-children kan tonen.
- WelcomeItem.vue: klein presentatie-item, laat zien hoe je props en slotting gebruikt.
- icons/: losse icon components, handig als kleine herbruikbare SVGs.

## Run lokaal (Windows PowerShell)
Veronderstelling: Node.js en npm zijn geïnstalleerd. Het project gebruikt Vite (standaard scripts aanwezig in `package.json`).

Open PowerShell in deze map (`VueWeek5`) en voer uit:

```powershell
# 1) dependencies installeren
npm install

# 2) development server starten
npm run dev
```

Standaard luistert Vite op http://localhost:5173 — open die URL in je browser.

Optioneel (build/preview):

```powershell
# productie build
npm run build

# preview van de build (indien script aanwezig)
npm run preview
```

Als `package.json` andere script-namen gebruikt (bijv. `start` of geen `preview`), pas die commando's dan aan.

## Tests
Er zijn geen automatische tests toegevoegd in deze week (bevat geen testconfig of specs). Als je unit-tests wilt toevoegen, kan Vitest of Jest worden ingezet.

## Aantekeningen / aannames
- Ik ga ervan uit dat dit project een standaard Vite-setup heeft met de gebruikelijke scripts (`dev`, `build`, `preview`) — controleer `package.json` als er iets anders nodig is.
- De instructies gebruiken `npm` en PowerShell (Windows). Als je `pnpm` of `yarn` gebruikt, vervang de commando's overeenkomstig.

## Tips / vervolgstappen
- Voeg korte readme-secties toe bij componenten die je wilt documenteren (props/events).
- Voeg kleine unit tests toe voor belangrijke componenten met Vitest.
- Maak demo-issues of TODOs in de README als je extra oefenopdrachten wilt bijhouden.

--
Gemaakt: README voor Week 5 — korte handleiding om snel lokaal te starten en te begrijpen wat er in de map staat.
