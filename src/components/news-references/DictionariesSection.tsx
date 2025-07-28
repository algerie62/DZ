import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BookOpen, Languages, FileText, Search } from 'lucide-react';
import { AddDictionaryTermForm } from '@/components/forms/AddDictionaryTermForm';
import { EnrichDictionaryForm } from '@/components/forms/EnrichDictionaryForm';
import { AddDefinitionForm } from '@/components/forms/AddDefinitionForm';
import { EnrichGlossaryForm } from '@/components/forms/EnrichGlossaryForm';

export function DictionariesSection() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEnrichForm, setShowEnrichForm] = useState(false);
  const [showAddGlossaryForm, setShowAddGlossaryForm] = useState(false);
  const [showEnrichGlossaryForm, setShowEnrichGlossaryForm] = useState(false);

  // Handlers pour l'onglet Dictionnaire Français-Arabe
  const handleAddTranslation = () => {
    setShowAddForm(true);
  };

  const handleEnrichDictionary = () => {
    setShowEnrichForm(true);
  };

  // Handlers pour l'onglet Glossaire Juridique Général
  const handleAddDefinition = () => {
    setShowAddGlossaryForm(true);
  };

  const handleEnrichGlossary = () => {
    setShowEnrichGlossaryForm(true);
  };

  const handleCloseAddForm = () => {
    setShowAddForm(false);
  };

  const handleCloseEnrichForm = () => {
    setShowEnrichForm(false);
  };

  const handleCloseAddGlossaryForm = () => {
    setShowAddGlossaryForm(false);
  };

  const handleCloseEnrichGlossaryForm = () => {
    setShowEnrichGlossaryForm(false);
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="francais-arabe" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="francais-arabe" className="gap-2">
            <BookOpen className="w-4 h-4" />
            Dictionnaire Français-Arabe
          </TabsTrigger>
          <TabsTrigger value="terminologie" className="gap-2">
            <Languages className="w-4 h-4" />
            Glossaire Juridique Général
          </TabsTrigger>
        </TabsList>

        <TabsContent value="francais-arabe" className="mt-6 space-y-6">
          {/* Boutons d'action pour dictionnaire français-arabe */}
          <div className="flex gap-3 justify-center mb-6">
            <Button className="gap-2" onClick={handleAddTranslation}>
              <Languages className="w-4 h-4" />
              Ajouter une traduction
            </Button>
            <Button variant="outline" className="gap-2" onClick={handleEnrichDictionary}>
              <FileText className="w-4 h-4" />
              Enrichir traductions
            </Button>
          </div>

          {/* Recherche dans le dictionnaire français-arabe */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input placeholder="Rechercher un terme en français..." />
                  <Input placeholder="البحث بالعربية..." />
                  <select className="p-2 border rounded-md">
                    <option>Tous les domaines juridiques</option>
                    <option>Droit civil</option>
                    <option>Droit pénal</option>
                    <option>Droit commercial</option>
                    <option>Droit administratif</option>
                    <option>Droit constitutionnel</option>
                    <option>Procédure civile</option>
                    <option>Procédure pénale</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <Button>
                    <Search className="w-4 h-4 mr-2" />
                    Rechercher dans 15,000 termes
                  </Button>
                  <Button variant="outline">Filtres avancés</Button>
                  <Button variant="outline">Recherche phonétique</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    Dictionnaire Juridique Français-Arabe
                  </CardTitle>
                  <p className="text-sm text-gray-600">15,000 termes juridiques avec traductions et définitions</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Statistiques du dictionnaire */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="text-center p-2 bg-blue-50 rounded">
                      <div className="font-bold text-blue-600">15,000</div>
                      <div className="text-xs text-gray-600">Termes FR-AR</div>
                    </div>
                    <div className="text-center p-2 bg-green-50 rounded">
                      <div className="font-bold text-green-600">12</div>
                      <div className="text-xs text-gray-600">Domaines</div>
                    </div>
                    <div className="text-center p-2 bg-purple-50 rounded">
                      <div className="font-bold text-purple-600">98%</div>
                      <div className="text-xs text-gray-600">Précision</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">
                      <div className="font-medium text-sm flex justify-between">
                        <span>Contrat</span>
                        <span className="text-blue-600">عقد</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">Convention par laquelle une ou plusieurs personnes s'obligent envers une ou plusieurs autres à donner, à faire ou à ne pas faire quelque chose.</p>
                      <div className="flex gap-1 mt-2">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Droit civil</span>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Fréquent</span>
                      </div>
                    </div>
                    <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">
                      <div className="font-medium text-sm flex justify-between">
                        <span>Tribunal</span>
                        <span className="text-blue-600">محكمة</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">Juridiction chargée de rendre la justice, composée d'un ou plusieurs magistrats.</p>
                      <div className="flex gap-1 mt-2">
                        <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Organisation judiciaire</span>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Essentiel</span>
                      </div>
                    </div>
                    <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">
                      <div className="font-medium text-sm flex justify-between">
                        <span>Jurisprudence</span>
                        <span className="text-blue-600">اجتهاد قضائي</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">Ensemble des décisions rendues par les tribunaux et qui constituent une source du droit.</p>
                      <div className="flex gap-1 mt-2">
                        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Sources du droit</span>
                        <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">Avancé</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1">
                      Consulter le dictionnaire complet
                    </Button>
                    <Button variant="outline" size="sm">
                      <Search className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Languages className="w-5 h-5 text-green-600" />
                  Traductions Contextuelles
                </CardTitle>
                <p className="text-sm text-gray-600">Traductions selon le contexte juridique algérien</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-green-50 rounded">
                    <div className="font-medium text-sm text-green-800">Droit Civil</div>
                    <div className="text-xs text-green-700 mt-1">
                      <strong>Succession:</strong> ميراث (héritage) - توارث (transmission héréditaire)
                    </div>
                    <div className="text-xs text-green-700">
                      <strong>Propriété:</strong> ملكية (propriété) - حيازة (possession)
                    </div>
                  </div>
                  
                  <div className="p-3 bg-red-50 rounded">
                    <div className="font-medium text-sm text-red-800">Droit Pénal</div>
                    <div className="text-xs text-red-700 mt-1">
                      <strong>Crime:</strong> جريمة (crime) - جناية (crime grave)
                    </div>
                    <div className="text-xs text-red-700">
                      <strong>Peine:</strong> عقوبة (sanction) - جزاء (châtiment)
                    </div>
                  </div>
                  
                  <div className="p-3 bg-blue-50 rounded">
                    <div className="font-medium text-sm text-blue-800">Procédure</div>
                    <div className="text-xs text-blue-700 mt-1">
                      <strong>Appel:</strong> استئناف (recours) - طعن (contestation)
                    </div>
                    <div className="text-xs text-blue-700">
                      <strong>Cassation:</strong> نقض (annulation) - إبطال (invalidation)
                    </div>
                  </div>

                  <div className="p-3 bg-yellow-50 rounded">
                    <div className="font-medium text-sm text-yellow-800">Expressions Courantes</div>
                    <div className="text-xs text-yellow-700 mt-1">
                      <strong>"En droit algérien":</strong> في القانون الجزائري
                    </div>
                    <div className="text-xs text-yellow-700">
                      <strong>"Selon la jurisprudence":</strong> حسب الاجتهاد القضائي
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="terminologie" className="mt-6 space-y-6">
          {/* Boutons d'action pour glossaire juridique */}
          <div className="flex gap-3 justify-center mb-6">
            <Button className="gap-2" onClick={handleAddDefinition}>
              <BookOpen className="w-4 h-4" />
              Ajouter une définition
            </Button>
            <Button variant="outline" className="gap-2" onClick={handleEnrichGlossary}>
              <FileText className="w-4 h-4" />
              Enrichir définitions
            </Button>
          </div>

          {/* Recherche dans le glossaire juridique général */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input placeholder="Rechercher un terme juridique..." />
                  <Input placeholder="Par définition ou synonyme..." />
                  <select className="p-2 border rounded-md">
                    <option>Tous les domaines</option>
                    <option>Droit civil</option>
                    <option>Droit pénal</option>
                    <option>Droit commercial</option>
                    <option>Droit administratif</option>
                    <option>Procédure civile</option>
                    <option>Procédure pénale</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <Button>
                    <Search className="w-4 h-4 mr-2" />
                    Rechercher dans 12,000 définitions
                  </Button>
                  <Button variant="outline">Recherche avancée</Button>
                  <Button variant="outline">Index alphabétique</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-green-600" />
                  Glossaire Juridique Général
                </CardTitle>
                <p className="text-sm text-gray-600">Définitions des termes juridiques fondamentaux</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Statistiques du glossaire */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center p-2 bg-green-50 rounded">
                    <div className="font-bold text-green-600">12,000</div>
                    <div className="text-xs text-gray-600">Définitions</div>
                  </div>
                  <div className="text-center p-2 bg-blue-50 rounded">
                    <div className="font-bold text-blue-600">8</div>
                    <div className="text-xs text-gray-600">Domaines</div>
                  </div>
                  <div className="text-center p-2 bg-purple-50 rounded">
                    <div className="font-bold text-purple-600">A-Z</div>
                    <div className="text-xs text-gray-600">Index</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">
                    <div className="font-medium text-sm text-blue-700">Appel</div>
                    <p className="text-xs text-gray-600 mt-1">Voie de recours ordinaire contre les jugements rendus en première instance par les tribunaux.</p>
                    <div className="flex gap-1 mt-2">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Procédure</span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Essentiel</span>
                    </div>
                  </div>
                  <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">
                    <div className="font-medium text-sm text-red-700">Cassation</div>
                    <p className="text-xs text-gray-600 mt-1">Recours devant la Cour suprême contre les arrêts des cours d'appel pour violation de la loi.</p>
                    <div className="flex gap-1 mt-2">
                      <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Procédure</span>
                      <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">Avancé</span>
                    </div>
                  </div>
                  <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">
                    <div className="font-medium text-sm text-green-700">Prescription</div>
                    <p className="text-xs text-gray-600 mt-1">Extinction d'un droit par l'écoulement du temps ou acquisition d'un droit par possession prolongée.</p>
                    <div className="flex gap-1 mt-2">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Droit civil</span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Fréquent</span>
                    </div>
                  </div>
                  <div className="p-3 border rounded hover:bg-gray-50 cursor-pointer">
                    <div className="font-medium text-sm text-purple-700">Nullité</div>
                    <p className="text-xs text-gray-600 mt-1">Sanction frappant un acte juridique qui ne remplit pas les conditions requises pour sa validité.</p>
                    <div className="flex gap-1 mt-2">
                      <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Droit général</span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Important</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t">
                  <Button className="w-full">
                    Consulter le glossaire complet
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-semibold flex items-center gap-2">
                    <Languages className="w-4 h-4 text-blue-600" />
                    Catégories Principales
                  </CardTitle>
                  <p className="text-xs text-gray-600">Organisation par domaine juridique</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded">
                      <div className="font-medium text-sm text-blue-700">Droit Civil</div>
                      <p className="text-xs text-blue-600 mt-1">Personnes, biens, obligations, contrats, famille</p>
                      <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded mt-1 inline-block">2,800 termes</span>
                    </div>
                    <div className="p-3 bg-red-50 rounded">
                      <div className="font-medium text-sm text-red-700">Droit Pénal</div>
                      <p className="text-xs text-red-600 mt-1">Infractions, sanctions, procédure pénale</p>
                      <span className="text-xs bg-red-200 text-red-800 px-2 py-1 rounded mt-1 inline-block">1,900 termes</span>
                    </div>
                    <div className="p-3 bg-green-50 rounded">
                      <div className="font-medium text-sm text-green-700">Droit Commercial</div>
                      <p className="text-xs text-green-600 mt-1">Sociétés, commerce, fonds de commerce</p>
                      <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded mt-1 inline-block">1,600 termes</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-semibold">Navigation Rapide</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm text-gray-700">Termes A-F</span>
                      <span className="text-xs text-gray-600">3,200 termes</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm text-gray-700">Termes G-P</span>
                      <span className="text-xs text-gray-600">4,600 termes</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm text-gray-700">Termes Q-Z</span>
                      <span className="text-xs text-gray-600">4,200 termes</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-3">
                    Index alphabétique complet
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Formulaires modaux pour dictionnaire français-arabe */}
      <AddDictionaryTermForm 
        isOpen={showAddForm} 
        onClose={handleCloseAddForm} 
      />
      
      <EnrichDictionaryForm 
        isOpen={showEnrichForm} 
        onClose={handleCloseEnrichForm} 
      />

      {/* Formulaires modaux pour glossaire juridique */}
      <AddDefinitionForm 
        isOpen={showAddGlossaryForm} 
        onClose={handleCloseAddGlossaryForm} 
      />
      
      <EnrichGlossaryForm 
        isOpen={showEnrichGlossaryForm} 
        onClose={handleCloseEnrichGlossaryForm} 
      />
    </div>
  );
}
