import { TutorModule } from './tutor.module';

describe('MyRealTutorModule', () => {
    let tutorModule: TutorModule;

    beforeEach(() => {
        tutorModule = new TutorModule();
    });

    it('should create an instance', () => {
        expect(tutorModule).toBeTruthy();
    });
});
