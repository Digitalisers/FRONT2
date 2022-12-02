export interface ICourse {
    idCourse: number;
    name: string;
    credits: number;
    coef: number;
}

export interface ISemestre {
    idSemestre: number;
    name: string;
    beginDate?: any;
    finishDate?: any;
    average: number;
    mention: string;
}

export interface IEvaluation {
    idEvaluation: number;
    dateExamen: string;
    course: ICourse;
    semestre: ISemestre;
}

export interface IGroup {
    idGroup: number;
    name: string;
    ref: string;
    creationDatetime: Date;
}

export interface IStudent {
    idUser: number;
    firstName: string;
    lastName: string;
    email: string;
    ref: string;
    studentAverage?: any;
    status: string;
    phone: string;
    birthDate: string;
    entranceDatetime: Date;
    sex: string;
    address: string;
    role: string;
    group: IGroup;
}

export interface IGrade {
    idGrade: number;
    average: number;
    evaluation: IEvaluation;
    student: IStudent;
}