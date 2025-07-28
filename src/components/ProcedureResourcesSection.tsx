
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, BookOpen, ExternalLink, Calendar } from 'lucide-react';
import { DocumentViewerModal } from '@/components/modals/DocumentViewerModal';
import { SectionHeader } from './common/SectionHeader';

export function ProcedureResourcesSection() {
  // État pour la modale de visualisation de guide
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [guideTitle, setGuideTitle] = useState<string|null>(null);

  // Ouvre la modale de visualisation de guide
  const handleConsultGuide = (title: string) => {
    setGuideTitle(title);
    setShowGuideModal(true);
  };

  // Déclenche un vrai téléchargement ZIP (fichier statique ou généré dynamiquement)
  const handleDownloadForms = (categoryTitle: string) => {
    const fileName = `${categoryTitle.toLowerCase().replace(/\s+/g, '_')}_forms.zip`;
    // Pour la démo, on utilise un fichier statique dans public/forms/
    const fileUrl = `/forms/${fileName}`;
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      {/* Modale de visualisation de guide */}
      {showGuideModal && guideTitle && (
        <DocumentViewerModal
          isOpen={showGuideModal}
          onClose={() => setShowGuideModal(false)}
          document={{
            title: guideTitle,
            content: `Ici s'affiche le guide pratique : ${guideTitle}. (À remplacer par le vrai contenu métier du guide)`
          }}
        />
      )}
      <Tabs defaultValue="guides" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="guides" className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Guides pratiques
          </TabsTrigger>
          <TabsTrigger value="formulaires" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Formulaires Téléchargeables
          </TabsTrigger>
        </TabsList>

        <TabsContent value="guides" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-base">Guide création d'entreprise</CardTitle>
                  <Badge variant="outline" className="text-xs">Populaire</Badge>
                </div>
                <CardDescription className="text-sm">
                  Guide complet pour créer votre entreprise en Algérie
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  Mis à jour le 15/03/2024
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-gray-600">• Étapes détaillées de création</p>
                  <p className="text-xs text-gray-600">• Documents requis</p>
                  <p className="text-xs text-gray-600">• Délais et coûts</p>
                </div>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleConsultGuide("Guide création d'entreprise")}
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Consulter
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Procédures d'état civil</CardTitle>
                <CardDescription className="text-sm">
                  Démarches pour actes d'état civil et extraits
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  Mis à jour le 10/03/2024
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-gray-600">• Actes de naissance/mariage</p>
                  <p className="text-xs text-gray-600">• Extraits d'état civil</p>
                  <p className="text-xs text-gray-600">• Légalisation documents</p>
                </div>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleConsultGuide("Procédures d'état civil")}
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Consulter
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Permis et autorisations</CardTitle>
                <CardDescription className="text-sm">
                  Guide pour obtenir permis et autorisations diverses
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  Mis à jour le 08/03/2024
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-gray-600">• Permis de construire</p>
                  <p className="text-xs text-gray-600">• Licences commerciales</p>
                  <p className="text-xs text-gray-600">• Autorisations spéciales</p>
                </div>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleConsultGuide("Permis et autorisations")}
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Consulter
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Procédures fiscales</CardTitle>
                <CardDescription className="text-sm">
                  Démarches fiscales et déclarations obligatoires
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  Mis à jour le 05/03/2024
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-gray-600">• Déclarations fiscales</p>
                  <p className="text-xs text-gray-600">• Numéro d'identification</p>
                  <p className="text-xs text-gray-600">• Exonérations et régimes</p>
                </div>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleConsultGuide("Procédures fiscales")}
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Consulter
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Procédures douanières</CardTitle>
                <CardDescription className="text-sm">
                  Import/export et démarches douanières
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  Mis à jour le 02/03/2024
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-gray-600">• Déclarations douanières</p>
                  <p className="text-xs text-gray-600">• Régimes suspensifs</p>
                  <p className="text-xs text-gray-600">• Franchise et exemptions</p>
                </div>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleConsultGuide("Procédures douanières")}
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Consulter
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Sécurité sociale</CardTitle>
                <CardDescription className="text-sm">
                  Affiliation et prestations de sécurité sociale
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  Mis à jour le 28/02/2024
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-gray-600">• Affiliation employeurs</p>
                  <p className="text-xs text-gray-600">• Carte Chifa</p>
                  <p className="text-xs text-gray-600">• Prestations familiales</p>
                </div>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleConsultGuide("Sécurité sociale")}
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Consulter
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="formulaires" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-base">Formulaires commerciaux</CardTitle>
                  <Badge variant="secondary" className="text-xs">15 docs</Badge>
                </div>
                <CardDescription className="text-sm">
                  Formulaires pour créations et modifications d'entreprises
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <p className="text-xs text-gray-600">• Statuts d'entreprise (SARL, SPA)</p>
                  <p className="text-xs text-gray-600">• Modification capital social</p>
                  <p className="text-xs text-gray-600">• Dissolution d'entreprise</p>
                </div>
                <Button 
                  size="sm" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => handleDownloadForms("Formulaires commerciaux")}
                >
                  <Download className="w-3 h-3 mr-1" />
                  Télécharger (ZIP)
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-base">État civil</CardTitle>
                  <Badge variant="secondary" className="text-xs">8 docs</Badge>
                </div>
                <CardDescription className="text-sm">
                  Demandes d'actes et extraits d'état civil
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <p className="text-xs text-gray-600">• Demande acte de naissance</p>
                  <p className="text-xs text-gray-600">• Extrait d'état civil</p>
                  <p className="text-xs text-gray-600">• Certificat de vie</p>
                </div>
                <Button 
                  size="sm" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => handleDownloadForms("État civil")}
                >
                  <Download className="w-3 h-3 mr-1" />
                  Télécharger (ZIP)
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-base">Permis et licences</CardTitle>
                  <Badge variant="secondary" className="text-xs">12 docs</Badge>
                </div>
                <CardDescription className="text-sm">
                  Demandes de permis et autorisations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <p className="text-xs text-gray-600">• Permis de construire</p>
                  <p className="text-xs text-gray-600">• Licence d'importation</p>
                  <p className="text-xs text-gray-600">• Autorisation d'exercice</p>
                </div>
                <Button 
                  size="sm" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => handleDownloadForms("Permis et licences")}
                >
                  <Download className="w-3 h-3 mr-1" />
                  Télécharger (ZIP)
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-base">Fiscalité</CardTitle>
                  <Badge variant="secondary" className="text-xs">10 docs</Badge>
                </div>
                <CardDescription className="text-sm">
                  Formulaires fiscaux et déclarations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <p className="text-xs text-gray-600">• Déclaration annuelle</p>
                  <p className="text-xs text-gray-600">• Demande NIF</p>
                  <p className="text-xs text-gray-600">• Exonération fiscale</p>
                </div>
                <Button 
                  size="sm" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => handleDownloadForms("Fiscalité")}
                >
                  <Download className="w-3 h-3 mr-1" />
                  Télécharger (ZIP)
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-base">Douanes</CardTitle>
                  <Badge variant="secondary" className="text-xs">6 docs</Badge>
                </div>
                <CardDescription className="text-sm">
                  Déclarations et formulaires douaniers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <p className="text-xs text-gray-600">• Déclaration import/export</p>
                  <p className="text-xs text-gray-600">• Demande agrément</p>
                  <p className="text-xs text-gray-600">• Franchise temporaire</p>
                </div>
                <Button 
                  size="sm" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => handleDownloadForms("Douanes")}
                >
                  <Download className="w-3 h-3 mr-1" />
                  Télécharger (ZIP)
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-base">Protection sociale</CardTitle>
                  <Badge variant="secondary" className="text-xs">9 docs</Badge>
                </div>
                <CardDescription className="text-sm">
                  Formulaires CNAS, CNR et mutuelles
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <p className="text-xs text-gray-600">• Affiliation CNAS</p>
                  <p className="text-xs text-gray-600">• Demande Carte Chifa</p>
                  <p className="text-xs text-gray-600">• Allocations familiales</p>
                </div>
                <Button 
                  size="sm" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => handleDownloadForms("Protection sociale")}
                >
                  <Download className="w-3 h-3 mr-1" />
                  Télécharger (ZIP)
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
