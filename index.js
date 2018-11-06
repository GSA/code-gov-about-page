/* global ASSET_PATH */
/* global customElements */
/* global fetch */
import React, { Component, Fragment } from 'react'
import { Link, NavLink, Redirect, Route, Switch } from 'react-router-dom'
import client from 'api-client'
import { loadScript } from 'utils/other'
import LazyHTML from 'components/lazy-html'
import SiteBanner from 'components/site-banner'
import SideNav from 'components/side-nav'

const abouturl = ASSET_PATH + 'about'
console.log("abouturl;", abouturl)

const dataurl = ASSET_PATH + "assets/plugins/about-page/"
console.log("dataurl:", dataurl)

const onDashboard = ["DHS", "DOC", "DOD", "DOE", "DOI", "DOJ", "DOL", "DOS", "DOT", "ED", "EPA", "GSA", "HHS", "HUD", "NASA", "NRC", "OPM", "SBA", "SSA", "TREASURY", "USAID", "USDA", "VA"]

const configJSON = {
  scores: {
    'compliant': [1, null],
    'partial': [0.25, 0.9999999],
    'noncompliant': [null, 0.244444444]
  },
  text: [
    {
      req: "agencyWidePolicy",
      variants: {
        compliant: "Agency policy is consistent with the Federal Source Code Policy.",
        noncompliant: "Agency policy has not been reviewed for consistency with the Federal Source Code Policy.",
        partial: "Agency policy is being updated for consistency with the Federal Source Code Policy."
      }
    },
    {
      req: "openSourceRequirement",
      variants: {
        compliant: "Agency has open sourced greater than 20% of their custom developed code.",
        noncompliant: "Agency has open sourced less than 10% of their custom developed code.",
        partial: "Agency has open sourced greater than 10% of their custom developed code."
      }
    },
    {
      req: "inventoryRequirement",
      variants: {
        compliant: "Agency has inventoried 100% of new custom code.",
        noncompliant: "Agency has inventoried less than 50% of new custom code.",
        partial: "Agency has inventoried more than 50% of new custom code."
      }
    }
  ]
};

const links = [
  {
    text: 'Overview',
    route: '/overview',
    children: [
      { text: 'Introduction', route: '/overview/introduction' },
      { text: 'Tracking Progress', route: '/overview/tracking-progress' }
    ]
  },
  {
    text: 'Compliance',
    route: '/compliance',
    children: [
      { text: 'Agency Compliance', route: '/compliance/dashboard' },
      { text: 'How to Procure Software', route: '/compliance/procurement' },
      {
        text: 'How to Inventory',
        route: '/compliance/inventory-code',
        children: [
          { text: 'Validate Schema', route: '/compliance/validate-schema' },
          { text: 'Upgrade Schema', route: '/compliance/upgrade-schema' }
        ]
      },
    ]
  },
  {
    text: 'Open Source Pilot',
    route: '/open-source',
    children: [
      { text: 'Introduction', route: '/open-source/introduction' },
      { text: 'Tools and Resources', route: '/open-source/resources' },
      { text: 'How to Measure', route: '/open-source/measuring-code' },
      { text: 'Licensing', route: '/open-source/licensing' }
    ]
  }
]

const OverviewIntroduction = () => <LazyHTML url={`${dataurl}overview/introduction.html`}/>
const OverviewTrackingProgress = () => <LazyHTML url={`${dataurl}overview/tracking-progress.html`}/>

class ComplianceDashboard extends React.Component {

  constructor(props) {
    super(props)
    this.loading = false
    this.state = {}
  }

  componentDidMount() {
    console.log("compliance dashboard mounted")
    if (!this.loading) {
      const webcomponent = customElements.get('compliance-dashboard')
      console.log("compliance-dashboard:", webcomponent)
      if (!webcomponent) {
        loadScript(ASSET_PATH + 'webcomponents/compliance-dashboard.js', true)
      }
      client.getCompliance().then(compliance => {
        console.log("got compliance:", compliance)
        compliance = compliance.filter(agency => onDashboard.includes(agency.acronym))
        compliance.forEach(agency => {
          agency.img = ASSET_PATH + `assets/img/logos/agencies/${agency.acronym}-50x50.png`
        })
        this.setState( { compliance })
      })
    }
  }

  render() {
    return (
      <Fragment>
        <LazyHTML url={`${dataurl}compliance/agency-compliance.html`}/>
        <compliance-dashboard
          id="compliance-dashboard"
          config={JSON.stringify(configJSON)}
          data={JSON.stringify(this.state.compliance)}
        />
      </Fragment>
    )
  }
}

const Procurement = () => <LazyHTML url={`${dataurl}compliance/how-to-procure.html`}/>

class InventoryCode extends React.Component {

  constructor(props) {
    super(props)
    this.loading = false
    this.state = {}
  }

  componentDidMount() {
    console.log("compliance dashboard mounted")
    if (!this.loading) {
      this.loading = true
      const webcomponent = customElements.get('json-schema')
      console.log("json-schema:", webcomponent)
      if (!webcomponent) {
        loadScript(ASSET_PATH + 'webcomponents/json-schema.js', true)
      }
    }
  }

  render() {
    return (
      <Fragment>
        <LazyHTML url={`${dataurl}compliance/how-to-inventory-a.html`}/>
        <json-schema url={ASSET_PATH + 'assets/data/schema.json'} />
        <LazyHTML url={`${dataurl}compliance/how-to-inventory-b.html`}/>
      </Fragment>
    )
  }
}

const OpenSourceIntroduction = () => <LazyHTML url={`${dataurl}open-source/introduction.html`}/>
const Resources = () => <LazyHTML url={`${dataurl}open-source/resources.html`}/>

const AboutPage = () => {
  return (
    <div>
      <SiteBanner title='ABOUT' />
      <div className="indented">
        <ul className="breadcrumbs">
          <li><Link to='/'>Home</Link></li>
          <li>ABOUT</li>
        </ul>
      </div>
      <br/>
      <div className="indented">
        <div className="width-quarter">
          <SideNav alignment="left" baseurl={abouturl} links={links} />
        </div>
        <div className="docs-content">
          <Switch>

            <Route path={`${abouturl}/overview/introduction`} component={OverviewIntroduction}/>
            <Route path={`${abouturl}/overview/tracking-progress`} component={OverviewTrackingProgress}/>
            <Redirect from={`${abouturl}/overview`} to={`${abouturl}/overview/introduction`}/>

            <Route path={`${abouturl}/compliance/dashboard`} component={ComplianceDashboard}/>
            <Route path={`${abouturl}/compliance/procurement`} component={Procurement}/>
            <Route path={`${abouturl}/compliance/inventory-code`} component={InventoryCode}/>
            {/* need to add validator */}
            <Redirect from={`${abouturl}/compliance`} to={`${abouturl}/compliance/dashboard`}/>

            <Route path={`${abouturl}/open-source/introduction`} component={OpenSourceIntroduction}/>
            <Route path={`${abouturl}/open-sources/resources`} component={Resources}/>
            <Route path={`${abouturl}/compliance/inventory-code`} component={InventoryCode}/>


          </Switch>
        </div>
      </div>
    </div>
  )
}

export default AboutPage