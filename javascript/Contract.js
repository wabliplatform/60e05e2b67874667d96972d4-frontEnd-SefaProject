let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';document.getElementById('idts').onclick = (event) => {
    event.preventDefault();
    { location.href= '/HomePage';}};document.getElementById('ima8').onclick = (event) => {
    event.preventDefault();
    { location.href= '/HomePage';}};document.getElementById('iu7ac').onclick = (event) => {
    event.preventDefault();
    { location.href= '/EnterPage';}};document.getElementById('i0v3u').onclick = (event) => {
    event.preventDefault();
    { location.href= '/HomePage';}};document.getElementById('i84zv').onclick = (event) => {
    event.preventDefault();
    { location.href= '/HomePage';}};document.getElementById('i05kl').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '/';}};document.getElementById('itq9jt').onclick = (event) => {
    event.preventDefault();
    { location.href= '/Overview';}};document.getElementById('i4k98').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '#submenu1';}};document.getElementById('iq4kx').onclick = (event) => {
    event.preventDefault();
    { location.href= '/Pre-Assessment';}};document.getElementById('i9vat').onclick = (event) => {
    event.preventDefault();
    { location.href= '/Profit&Loss';}};document.getElementById('iix52a').onclick = (event) => {
    event.preventDefault();
    { location.href= '/RiskAssessmentProtocol';}};document.getElementById('ikd58b').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/Contract/','');
      if(projectId === '/Contract' || projectId === ''){
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach( (value, key) => {
          if(document.getElementById(key).contains(document.getElementById('ikd58b')) === true){
            projectId = value._id;
          }
        })
      }
   let project = new TempApi.Project();project['serviceProviderName'] = document.querySelector("[annotationname = 'serviceProviderName']").value;project['directorName'] = document.querySelector("[annotationname = 'directorName']").value;project['countryRegistration'] = document.querySelector("[annotationname = 'countryRegistration']").value;project['companyNumber'] = document.querySelector("[annotationname = 'companyNumber']").value;project['registeredOfficeAddress'] = document.querySelector("[annotationname = 'registeredOfficeAddress']").value;project['registeredOfficePostcode'] = document.querySelector("[annotationname = 'registeredOfficePostcode']").value;project['registeredOfficeCity'] = document.querySelector("[annotationname = 'registeredOfficeCity']").value;project['outputType'] = document.querySelector("[annotationname = 'outputType']").value;project['currency'] = document.querySelector("[annotationname = 'currency']").value; let opts = {project};apiProjectApi.updateproject( projectId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = serviceProviderName]').value = response.body.query.serviceProviderName ;document.querySelector('[annotationname = directorName]').value = response.body.query.directorName ;document.querySelector('[annotationname = countryRegistration]').value = response.body.query.countryRegistration ;document.querySelector('[annotationname = companyNumber]').value = response.body.query.companyNumber ;document.querySelector('[annotationname = registeredOfficeAddress]').value = response.body.query.registeredOfficeAddress ;document.querySelector('[annotationname = registeredOfficePostcode]').value = response.body.query.registeredOfficePostcode ;document.querySelector('[annotationname = registeredOfficeCity]').value = response.body.query.registeredOfficeCity ;document.querySelector('[annotationname = outputType]').value = response.body.query.outputType ;document.querySelector('[annotationname = currency]').value = response.body.query.currency ;{ location.href= '/Pre-Assessment/'+response.body.query._id+'';}}});};window.onload = () => {let projectId = window.location.pathname.replace('/Contract/','');
      if(projectId === '/Contract' || projectId === ''){
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach( (value, key) => {
          if(document.getElementById(key).contains(document.getElementById('isw2as')) === true){
            projectId = value._id;
          }
        })
      }
   apiProjectApi.getproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = serviceProviderName]').value = response.body.query.serviceProviderName ;document.querySelector('[annotationname = directorName]').value = response.body.query.directorName ;document.querySelector('[annotationname = countryRegistration]').value = response.body.query.countryRegistration ;document.querySelector('[annotationname = companyNumber]').value = response.body.query.companyNumber ;document.querySelector('[annotationname = registeredOfficeAddress]').value = response.body.query.registeredOfficeAddress ;document.querySelector('[annotationname = registeredOfficePostcode]').value = response.body.query.registeredOfficePostcode ;document.querySelector('[annotationname = registeredOfficeCity]').value = response.body.query.registeredOfficeCity ;document.querySelector('[annotationname = outputType]').value = response.body.query.outputType ;}});};