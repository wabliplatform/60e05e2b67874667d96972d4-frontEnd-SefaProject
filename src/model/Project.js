/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Project model module.
 * @module model/Project
 * @version 1.0.0
 */
class Project {
    /**
     * Constructs a new <code>Project</code>.
     * @alias module:model/Project
     * @param projectName {String} 
     * @param projectDescription {String} 
     * @param serviceProviderName {String} 
     * @param directorName {String} 
     * @param countryRegistration {String} 
     * @param companyNumber {String} 
     * @param registeredOfficeAddress {String} 
     * @param registeredOfficePostcode {String} 
     * @param registeredOfficeCity {String} 
     * @param outputType {String} 
     * @param currency {String} 
     */
    constructor(projectName, projectDescription, serviceProviderName, directorName, countryRegistration, companyNumber, registeredOfficeAddress, registeredOfficePostcode, registeredOfficeCity, outputType, currency) { 
        
        Project.initialize(this, projectName, projectDescription, serviceProviderName, directorName, countryRegistration, companyNumber, registeredOfficeAddress, registeredOfficePostcode, registeredOfficeCity, outputType, currency);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, projectName, projectDescription, serviceProviderName, directorName, countryRegistration, companyNumber, registeredOfficeAddress, registeredOfficePostcode, registeredOfficeCity, outputType, currency) { 
        obj['projectName'] = projectName;
        obj['projectDescription'] = projectDescription;
        obj['serviceProviderName'] = serviceProviderName;
        obj['directorName'] = directorName;
        obj['countryRegistration'] = countryRegistration;
        obj['companyNumber'] = companyNumber;
        obj['registeredOfficeAddress'] = registeredOfficeAddress;
        obj['registeredOfficePostcode'] = registeredOfficePostcode;
        obj['registeredOfficeCity'] = registeredOfficeCity;
        obj['outputType'] = outputType;
        obj['currency'] = currency;
    }

    /**
     * Constructs a <code>Project</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Project} obj Optional instance to populate.
     * @return {module:model/Project} The populated <code>Project</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Project();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('projectName')) {
                obj['projectName'] = ApiClient.convertToType(data['projectName'], 'String');
            }
            if (data.hasOwnProperty('projectDescription')) {
                obj['projectDescription'] = ApiClient.convertToType(data['projectDescription'], 'String');
            }
            if (data.hasOwnProperty('serviceProviderName')) {
                obj['serviceProviderName'] = ApiClient.convertToType(data['serviceProviderName'], 'String');
            }
            if (data.hasOwnProperty('directorName')) {
                obj['directorName'] = ApiClient.convertToType(data['directorName'], 'String');
            }
            if (data.hasOwnProperty('countryRegistration')) {
                obj['countryRegistration'] = ApiClient.convertToType(data['countryRegistration'], 'String');
            }
            if (data.hasOwnProperty('companyNumber')) {
                obj['companyNumber'] = ApiClient.convertToType(data['companyNumber'], 'String');
            }
            if (data.hasOwnProperty('registeredOfficeAddress')) {
                obj['registeredOfficeAddress'] = ApiClient.convertToType(data['registeredOfficeAddress'], 'String');
            }
            if (data.hasOwnProperty('registeredOfficePostcode')) {
                obj['registeredOfficePostcode'] = ApiClient.convertToType(data['registeredOfficePostcode'], 'String');
            }
            if (data.hasOwnProperty('registeredOfficeCity')) {
                obj['registeredOfficeCity'] = ApiClient.convertToType(data['registeredOfficeCity'], 'String');
            }
            if (data.hasOwnProperty('outputType')) {
                obj['outputType'] = ApiClient.convertToType(data['outputType'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
Project.prototype['_id'] = undefined;

/**
 * @member {String} projectName
 */
Project.prototype['projectName'] = undefined;

/**
 * @member {String} projectDescription
 */
Project.prototype['projectDescription'] = undefined;

/**
 * @member {String} serviceProviderName
 */
Project.prototype['serviceProviderName'] = undefined;

/**
 * @member {String} directorName
 */
Project.prototype['directorName'] = undefined;

/**
 * @member {String} countryRegistration
 */
Project.prototype['countryRegistration'] = undefined;

/**
 * @member {String} companyNumber
 */
Project.prototype['companyNumber'] = undefined;

/**
 * @member {String} registeredOfficeAddress
 */
Project.prototype['registeredOfficeAddress'] = undefined;

/**
 * @member {String} registeredOfficePostcode
 */
Project.prototype['registeredOfficePostcode'] = undefined;

/**
 * @member {String} registeredOfficeCity
 */
Project.prototype['registeredOfficeCity'] = undefined;

/**
 * @member {String} outputType
 */
Project.prototype['outputType'] = undefined;

/**
 * @member {String} currency
 */
Project.prototype['currency'] = undefined;






export default Project;

