let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';let project = new TempApi.Project();document.getElementById('i0v3u').onclick = (event) => {
    event.preventDefault();
    { location.href= '/HomePage';}};document.getElementById('i05kl').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '/';}};document.getElementById('i4k98').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '#submenu1';}};document.getElementById('ikd58b').onclick = (event) => {
    event.preventDefault();
    project['projectName'] = document.querySelector("[annotationname = 'projectName']").value;project['projectDescription'] = document.querySelector("[annotationname = 'projectDescription']").value;apiProjectApi.createproject( project, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); { location.href= '/Contract/'+response.body.query._id+'';}}});};window.onload = () => {};