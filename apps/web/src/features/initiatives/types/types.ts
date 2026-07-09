export type InitiativeCategory = 
  | 'birthday-tree-initiative' 
  | 'cleanup-recycling' 
  | 'forest-garden-approach' 
  | 'tree-nursery';

export interface Initiative {
  id: string;
  title: string;
  description: string;
  category: InitiativeCategory;
  imageSrc: string;
}

export interface GalleryItem {
  id: string;
  imageSrc: string;
  title: string;
  category: string;
}