let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';let project = new TempApi.Project();document.getElementById('idts').onclick = (event) => {
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
    { location.href= '/Contract';}};document.getElementById('i4k98').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '#submenu1';}};document.getElementById('iq4kx').onclick = (event) => {
    event.preventDefault();
    { location.href= '/Pre-Assessment';}};document.getElementById('i9vat').onclick = (event) => {
    event.preventDefault();
    { location.href= '/Profit&Loss';}};document.getElementById('iix52a').onclick = (event) => {
    event.preventDefault();
    { location.href= '/RiskAssessmentProtocol';}};document.getElementById('ir7zdp').onclick = (event) => {
    event.preventDefault();
    { location.href= '/HomePage';}};document.getElementById('ikd58b').onclick = (event) => {
    event.preventDefault();
    project['projectName'] = document.querySelector("[annotationname = 'projectName']").value;project['projectDescription'] = document.querySelector("[annotationname = 'projectDescription']").value;apiProjectApi.createproject( project, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); { location.href= '/Contract/'+response.body.query._id+'';}}});};window.onload = () => {};