export class ProjectDetails {
  private _projectId: string;
  private _title: string;
  private _description: string;
  private _languagesUsed: string[];
  private _button: any;

  constructor(projectId: string, title: string, description: string, languagesUsed: string[], button: any) {
    this._projectId = projectId;
    this._title = title;
    this._description = description;
    this._languagesUsed = languagesUsed;
    this._button = button;
  }

  get projectId(): string {
    return this._projectId;
  }

  set projectId(projectId) {
    this._projectId = projectId;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get languagesUsed(): string[] {
    return this._languagesUsed;
  }

  set languagesUsed(value: string[]) {
    this._languagesUsed = value;
  }

  get button(): any {
    return this._button;
  }

  set button(value: any) {
    this._button = value;
  }
}
