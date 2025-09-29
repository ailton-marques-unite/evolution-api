export declare abstract class Entity<Props = any> {
    readonly _id: string;
    readonly props: Props;
    constructor(props: Props, id?: string);
    get id(): any;
    toJSON(): Required<{
        id: string;
    } & Props>;
}
