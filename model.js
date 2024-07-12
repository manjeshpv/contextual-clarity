const database = require('./database'); // Assuming you have a database module

module.exports = {


    async createScenario() {
        // Fetch rows from the database
        return await database.createScenario();
    },

    async getRows() {
        // Fetch rows from the database
        return await database.getRows();
    },

    async getStages() {
        // Fetch stages from the database
        return await database.getStages();
    },

    async getPipelines() {
        // Fetch pipelines from the database
        return await database.getPipelines();
    },

    async savePipeline(pipeline) {
        // Save pipeline to the database
        return await database.savePipeline(pipeline);
    },


    // admin can see all entries 
    // only support will be in my tasks
    // where support is pipeline, built with stages
    // based on roles, activity stages will be there, it should part of state chart too
    // https://youtu.be/btlY2XotWuM?si=49KJMeUT5SolWU-k&t=206

    async mapPipelineRole() {
        return await database.mapPipelineRole(pipelineId, roleID);
    }

    async addStageChangeCondition('restrict_by_group') {

    }

    async addConditionToTransition('restrict_by_group') {

    }

    addTriggers() {

    }

    addValidations() {

    }



    async updateStage({ pipeline_id, stage_id, data }) {
        // Update stage in the database
        return await database.updateStage({ pipeline_id, stage_id, data });
    },

    async transitionStage({ from_stage_id, to_stage_id, by_user_id }) {
        // Handle stage transition
        return await database.transitionStage({ from_stage_id, to_stage_id, by_user_id });
    },

    addStageInputForm(callback) {
        // Handle adding stage input form
        callback(formConfig);
    },

    async getUser(user_id) {
        // Fetch user from the database
        return await database.getUser(user_id);
    },

    mapPostAction(callbacks) {
        // Map post actions
        callbacks.forEach(callback => callback());
    },

    mapPresaveAction(callback) {
        // Map pre-save action
        callback();
    }

};
