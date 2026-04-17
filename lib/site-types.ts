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
  /** E.164 or digits; optional if older API responses omit it */
  phoneNumber?: string | null;
  address: string;
  cityOperatedIn: string;
  stateOperatedIn: string;
  zipCodeOperatedIn: string;
  previewUrl: string;
  customDomain: string;
  templateId: string;
}
