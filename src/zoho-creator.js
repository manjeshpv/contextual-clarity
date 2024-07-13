class ZohoCreator {
    constructor({ space_name, models }) {
        this.space_name = space_name;
        this.models = models;
    }

    async createKanbanBoard() {
        return await this.models.getRows();
    }

    async getStages() {
        return await this.models.getStages();
    }

    async getPipelines() {
        return await this.models.getPipelines();
    }

    async savePipeline(pipeline) {
        return await this.models.savePipeline(pipeline);
    }

    async updateStage({ pipeline_id, stage_id, data }) {
        return await this.models.updateStage({ pipeline_id, stage_id, data });
    }

    async transitionStage({ from_stage_id, to_stage_id, by_user_id }) {
        return await this.models.transitionStage({ from_stage_id, to_stage_id, by_user_id });
    }

    addStageInputForm(callback) {
        this.models.addStageInputForm(callback);
    }

    async getUser(user_id) {
        return await this.models.getUser(user_id);
    }

    mapPostAction(callbacks) {
        this.models.mapPostAction(callbacks);
    }

    mapPresaveAction(callback) {
        this.models.mapPresaveAction(callback);
    }
}

module.exports = ZohoCreator;
