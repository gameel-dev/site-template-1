/**
 * Response shape from GET …/by-custom-domain.
 */
export interface SiteDetails {
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  id: number;
  siteName: string;
  siteTitle: string;
  companyName: string;
  email: string;
  address: string;
  cityOperatedIn: string;
  stateOperatedIn: string;
  zipCodeOperatedIn: string;
  previewUrl: string;
  customDomain: string;
  templateId: string;
}
