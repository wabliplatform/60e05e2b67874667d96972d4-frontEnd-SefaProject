let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';document.getElementById('i0v3u').onclick = (event) => {
    event.preventDefault();
    { location.href= '/HomePage';}};document.getElementById('i05kl').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '/';}};document.getElementById('i4k98').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '#submenu1';}};document.getElementById('ikd58b').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/updateOverview/','');let project = new TempApi.Project();project['projectName'] = document.querySelector("[annotationname = 'projectName']").value;project['projectDescription'] = document.querySelector("[annotationname = 'projectDescription']").value; let opts = {project};apiProjectApi.updateproject( projectId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = projectName]').value = response.body.query.projectName ;document.querySelector('[annotationname = projectDescription]').value = response.body.query.projectDescription ;{ location.href= '/Contract/'+response.body.query._id+'';}}});};window.onload = () => {};