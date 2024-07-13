const chai = require('chai');
const sinon = require('sinon');
const ZohoCreator = require('../../src/zoho-creator'); // Adjust the path to where your ZohoCreator class is located
const models = require('../../src/model'); // Adjust the path to where your model is located

const expect = chai.expect;

describe('ZohoCreator', () => {
    let zohoCreator;

    beforeEach(() => {
        zohoCreator = new ZohoCreator({ space_name: 'booking', models });
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should get rows', async () => {
        const stub = sinon.stub(models, 'getRows').resolves(['row1', 'row2']);
        const rows = await zohoCreator.getRows();
        expect(stub.calledOnce).to.be.true;
        expect(rows).to.deep.equal(['row1', 'row2']);
    });

    it('should get stages', async () => {
        const stub = sinon.stub(models, 'getStages').resolves(['stage1', 'stage2']);
        const stages = await zohoCreator.getStages();
        expect(stub.calledOnce).to.be.true;
        expect(stages).to.deep.equal(['stage1', 'stage2']);
    });

    it('should get pipelines', async () => {
        const stub = sinon.stub(models, 'getPipelines').resolves(['pipeline1', 'pipeline2']);
        const pipelines = await zohoCreator.getPipelines();
        expect(stub.calledOnce).to.be.true;
        expect(pipelines).to.deep.equal(['pipeline1', 'pipeline2']);
    });

    it('should save a pipeline', async () => {
        const pipeline = { name: 'New Pipeline' };
        const stub = sinon.stub(models, 'savePipeline').resolves(pipeline);
        const result = await zohoCreator.savePipeline(pipeline);
        expect(stub.calledOnceWith(pipeline)).to.be.true;
        expect(result).to.deep.equal(pipeline);
    });

    it('should update a stage', async () => {
        const pipeline_id = 1;
        const stage_id = 2;
        const data = { status: 'Updated' };
        const stub = sinon.stub(models, 'updateStage').resolves(data);
        const result = await zohoCreator.updateStage({ pipeline_id, stage_id, data });
        expect(stub.calledOnceWith({ pipeline_id, stage_id, data })).to.be.true;
        expect(result).to.deep.equal(data);
    });

    it('should transition a stage', async () => {
        const from_stage_id = 1;
        const to_stage_id = 2;
        const by_user_id = 123;
        const stub = sinon.stub(models, 'transitionStage').resolves(true);
        const result = await zohoCreator.transitionStage({ from_stage_id, to_stage_id, by_user_id });
        expect(stub.calledOnceWith({ from_stage_id, to_stage_id, by_user_id })).to.be.true;
        expect(result).to.be.true;
    });

    it('should add a stage input form', () => {
        const callback = sinon.spy();
        zohoCreator.addStageInputForm(callback);
        expect(callback.calledOnce).to.be.true;
    });

    it('should get a user', async () => {
        const user_id = 123;
        const user = { id: user_id, name: 'John Doe' };
        const stub = sinon.stub(models, 'getUser').resolves(user);
        const result = await zohoCreator.getUser(user_id);
        expect(stub.calledOnceWith(user_id)).to.be.true;
        expect(result).to.deep.equal(user);
    });

    it('should map post actions', () => {
        const callback1 = sinon.spy();
        const callback2 = sinon.spy();
        zohoCreator.mapPostAction([callback1, callback2]);
        expect(callback1.calledOnce).to.be.true;
        expect(callback2.calledOnce).to.be.true;
    });

    it('should map presave action', () => {
        const callback = sinon.spy();
        zohoCreator.mapPresaveAction(callback);
        expect(callback.calledOnce).to.be.true;
    });
});
