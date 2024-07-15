import { Routes } from '@angular/router';
import { ExplanationComponent } from './pages/explanation/explanation.component';
import { TimingComponent } from './pages/timing/timing.component';
import { ShortCaseSummaryComponent } from './pages/short-case-summary/short-case-summary.component';
import { SuspectedOffencesComponent } from './pages/suspected-offences/suspected-offences.component';
import { EvidenceSupportComponent } from './pages/evidence-support/evidence-support.component';
import { UndertakingCostsComponent } from './pages/undertaking-costs/undertaking-costs.component';
import { DeclarationComponent } from './pages/declaration/declaration.component';
import { FinalPageComponent } from './pages/final-page/final-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/explanation', pathMatch: 'full' },
  { path: 'explanation', component: ExplanationComponent },
  { path: 'timing', component: TimingComponent },
  { path: 'short-case-summary', component: ShortCaseSummaryComponent },
  { path: 'suspected-offences', component: SuspectedOffencesComponent },
  { path: 'evidence-support', component: EvidenceSupportComponent },
  { path: 'undertaking-costs', component: UndertakingCostsComponent },
  { path: 'declaration', component: DeclarationComponent },
  { path: 'final-page', component: FinalPageComponent }
];

