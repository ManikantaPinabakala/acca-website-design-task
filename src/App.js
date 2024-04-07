import Header from './Header'
import BecomeACCA from './BecomeACCA'
import WhyChooseUS from './WhyChooseUs'
import EligibilitySection from './EligibilitySection'
import WhatWillYouLearn from './WhatWillYouLearn'
import PlacementAssistance from './PlacementAssistance'
import KickOff from './KickOff'

import './App.css'

const App = () => (
  <div className='app-container'>
    <Header />
    <BecomeACCA />
    <WhyChooseUS />
    <EligibilitySection />
    <WhatWillYouLearn />
    <PlacementAssistance />
    <KickOff />
  </div>
)

export default App