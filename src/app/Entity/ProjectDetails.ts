export class ProjectDetails {
  private _projectId: string;
  private _title: string;
  private _description: string;
  private _languagesUsed: string[];
  private _teamname: string;
  private _teammemberId: string;


  constructor(projectId: string, title: string, description: string, languagesUsed: string[], teamname: string, teammemberId: string) {
    this._projectId = projectId;
    this._title = title;
    this._description = description;
    this._languagesUsed = languagesUsed;
    this._teamname = teamname;
    this._teammemberId = teammemberId;
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

  get teamname(): string {
    return this._teamname;
  }

  set teamname(value: string) {
    this._teamname = value;
  }

  get teammemberId(): string {
    return this._teammemberId;
  }

  set teammemberId(value: string) {
    this._teammemberId = value;
  }
}
