import type { GalleryItem, Initiative } from "@/features/initiatives/types/types";


export const INITIATIVES_DATA: Initiative[] = [
  {
    id: 'init-1',
    title: 'Nyalenda Milestone Trees',
    description: 'Planting native trees to celebrate student and community birthdays, turning personal milestones into local environmental action at school.',
    category: 'tree-nursery',
    imageSrc: `/images/forest-garden-approach-01.webp`,
  },
  {
    id: 'init-2',
    title: 'Local Clean-Up Drives',
    description: 'Mobilizing student-led cleanup efforts to collect plastics and debris from the Nyalenda community, restoring local open spaces.',
    category: 'cleanup-recycling',
    imageSrc: `/images/cleanup-recycling-02.webp`,
  },
  {
    id: 'init-3',
    title: 'School Forest-Garden Program',
    description: 'Implementing multi-layered agricultural ecosystems at St. Mary’s Nyalenda to grow organic food and address student hunger.',
    category: 'forest-garden-approach',
    imageSrc: `/images/forest-garden-approach-04.webp`,
  },
  {
    id: 'init-4',
    title: 'Resilient Crop Nurseries',
    description: 'Cultivating hardy native crop and tree seedlings to support school reforestation efforts and supply local community farms.',
    category: 'tree-nursery',
    imageSrc: `/images/tree-nursery-01.webp`,
  },
  {
    id: 'init-5',
    title: 'Zero-Waste School Network',
    description: 'Establishing dedicated student teams to sort and recycle school waste, keeping plastics out of local waterways and Lake Victoria.',
    category: 'cleanup-recycling',
    imageSrc: `/images/cleanup-recycling-01.webp`,
  },
  {
    id: 'init-6',
    title: 'Commemorative Birthday Saplings',
    description: 'Encouraging young learners to plant a tree on their birthday, fostering a lifelong mindset of environmental stewardship.',
    category: 'birthday-tree-initiative',
    imageSrc: `/images/birthday-tree-initiative-01.webp`,
  },
  {
    id: 'init-7',
    title: 'Climate-Smart Food Gardens',
    description: 'Utilizing organic, multi-tier forest-gardening methods in small school spaces to improve soil fertility and maximize crop yields.',
    category: 'forest-garden-approach',
    imageSrc: `/images/gallery-04.webp`,
  },
  {
    id: 'init-8',
    title: 'Backyard Seedling Propagation',
    description: 'Helping smallholder families in the surrounding community set up micro-nurseries, expanding our native tree network.',
    category: 'tree-nursery',
    imageSrc: `/images/forest-garden-approach-04.webp`,
  },
  {
    id: 'init-9',
    title: 'Milk Packet Upcycling',
    description: 'Repurposing empty school milk packets as durable seedling bags, saving costs while minimizing local plastic waste.',
    category: 'cleanup-recycling',
    imageSrc: `/images/cleanup-recycling-04.webp`,
  },
  {
    id: 'init-10',
    title: 'Community Celebration Planting',
    description: 'Partnering with local families and community-based organizations to plant commemorative trees during milestones.',
    category: 'birthday-tree-initiative',
    imageSrc: `/images/tree-nursery-05.webp`,
  },
  {
    id: 'init-11',
    title: 'Indigenous Vegetable Farming',
    description: 'Intercropping local indigenous vegetables with dynamic tree layers to improve the microclimate and provide reliable school lunch meals.',
    category: 'forest-garden-approach',
    imageSrc: `/images/gallery-03.webp`,
  },
  {
    id: 'init-12',
    title: 'Climate-Adapted Plant Trials',
    description: 'Testing hardy crop varieties in our nurseries to identify the best plants for Kisumu’s changing rainfall and weather patterns.',
    category: 'tree-nursery',
    imageSrc: `/images/gallery-04.webp`,
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  { id: 'gal-1', imageSrc: `/images/gallery-01.webp`, title: 'Restoration Kickoff', category: 'Birthday Tree' },
  { id: 'gal-2', imageSrc: `/images/forest-garden-approach-04.webp`, title: 'Sorting Center Operations', category: 'Recycling' },
  { id: 'gal-3', imageSrc: `/images/gallery-03.webp`, title: 'Forest Canopy Inspection', category: 'Forest Garden' },
  { id: 'gal-4', imageSrc: `/images/forest-garden-approach-03.webp`, title: 'Community Greenhouse Planting', category: 'Nursery' },
  { id: 'gal-5', imageSrc: `/images/tree-nursery-02.webp`, title: 'River Basin Reclamation', category: 'Cleanup' },
  { id: 'gal-6', imageSrc: `/images/cleanup-recycling-03.webp`, title: 'Nursery Infrastructure Build', category: 'Tree Nursery' },
  { id: 'gal-7', imageSrc: `/images/birthday-tree-initiative-02.webp`, title: 'Agroforestry Field Training', category: 'Forest Garden' }
];