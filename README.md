# Data_Suite
### 1. Einleitung

#### Projektbeschreibung
Das Projekt "Data_Suite" ist ein umfassendes Softwarepaket, das aus mehreren Submodulen besteht, darunter OCR_Manager_Suite, Template_Center, Text_Anonymizer und html_b2b_form. Diese Module bieten eine breite Palette von Funktionen zur Datenverarbeitung, Dokumentenanalyse und Textanonymisierung. 
Ziel des Projekts ist es, eine modulare und flexible Lösung bereitzustellen, die Unternehmen dabei unterstützt, ihre Datenverarbeitungs- und Anonymisierungsprozesse effizient zu gestalten. Durch die Nutzung dieser Suite können Unternehmen ihre Arbeitsabläufe automatisieren, die Datenqualität verbessern und sicherstellen, dass vertrauliche Informationen geschützt bleiben.

#### Zielgruppe
Dieser Leitfaden richtet sich an Business Analysten und Entwickler, die das "Data_Suite"-Projekt in ihre Windows Arbeitsumgebung installieren, konfigurieren und verwenden möchten. Die Anleitung bietet detaillierte Schritte zur Einrichtung und Synchronisation des Projekts auf mehreren Windows-Clients und unterstützt die Zielgruppe dabei, das Projekt effizient zu nutzen und zu erweitern.

#### Überblick über den Leitfaden
Inhalte sind in folgende Hauptabschnitte gegliedert:

1. **Einleitung**: Einführung in das Projekt, die Zielgruppe und den Aufbau des Leitfadens.
2. **Systemvoraussetzungen**: Auflistung der benötigten Software und Komponenten.
3. **Installation und Basiskonfigurationen**: Installation von Git und IntelliJ IDEA, sowie zur Erstellung und Konfiguration von SSH-Schlüsseln.
4. **GIT Setup Main**: Anleitung zur Erstellung des Hauptprojekts.
5. **GIT Setup Submodule**: Konfiguration von Git, Erteilung von Zugriffsrechten, Hinzufügen von Submodulen.
6. **IntelliJ Setup**: Schritte zur Importierung des Projekts in IntelliJ IDEA, Einrichtung virtueller Umgebungen und Konfiguration der Git-Integration.
7. **Entwicklung**: Beschreibung der Projektstruktur, Erläuterung von Code-Beispielen und Hinweise zur Erweiterung des Projekts.
8. **Integration zentraler Konfigurationsdateien**: Erklärungen zu wichtigen Konfigurationsdateien im .idea-Verzeichnis und deren Nutzung.
9. **Fehlerbehebung und Support**: Auflistung häufiger Probleme und deren Lösungen.
10. **Glossar**: Definition wichtiger technischer Begriffe.
11. **Anhang**: Zusätzliche relevante Informationen und Ressourcen für das Projekt.

```plaintext
Data_Suite/
├── venv/                       # Virtuelle Umgebung für Python
│   ├── Scripts/
│   ├── Lib/
│   │   ├── site-packages/
│   │   │   ├── chardet/       # chardet Bibliothek
│   │   │   └── ...
│   └── ...
├── ocr_enricher/               # Submodul für OCR-Manager
│   ├── .git/                   # Git-Verzeichnis für das Submodul
│   ├── logs/
│   │   ├── error_log.txt       # Fehler-Datei
│   │   ├── result_log.txt      # Ergebnis-Datei
│   ├── src/
│   │   ├── OCR_Enricher.ps1    # Benötigt ocrmypdf Installation
│   │   ├── pdf_utils.py        # Verwendet PyPDF2
│   ├── requirements.txt        # Abhängigkeiten für OCR_Enricher
│   └── ...
├── template_center/            # Submodul für Template Center
│   ├── .git/                   # Git-Verzeichnis für das Submodul
│   ├── __init__.py
│   ├── template_handler.py
│   ├── requirements.txt        # Python-Abhängigkeiten für Template_Center
│   └── ...
├── text_anonymizer/            # Submodul für Text-Anonymisierung
│   ├── .git/                   # Git-Verzeichnis für das Submodul
│   ├── __init__.py 
│   ├── anonymizer/
│   │   ├── __init__.py         
│   │   ├── cli.py              # Command Line Ausführung
│   │   ├── config.py           # File-Struktur 
│   │   ├── loader.py           # Inkl. Chardet 
│   │   ├── processor.py        # Inkl. re  
│   ├── flat_files/
│   │   ├── map/                # Map Files 
│   │   │   ├── ../             # Diverse CSV
│   │   ├── rpl/                # Replacement Files 
│   │   │   ├── ../             # Diverse CSV
│   │   ├── src/                # Source Files 
│   │   │   ├── ../             # Diverse CSV
│   │   ├── trg/                # Target Files 
│   │   │   ├── ../             # Diverse CSV
│   │   ├── tests/              # Test Files 
│   │   │   ├── test_imports.py # Test Import
│   │   │   ├── ../             
│   ├── anonymizer.log          # Anonymizer Log für text_anonymizer
│   ├── requirements.txt        # Abhängigkeiten für text_anonymizer
│   └── ...
├── html_b2b_form/              # Submodul für HTML B2B Form
│   ├── .git/                   # Git-Verzeichnis für das Submodul
│   ├── .idea/                  # IntelliJ IDEA Projektdateien
│   │   ├── misc.xml
│   │   ├── modules.xml
│   │   ├── jsLibraryMappings.xml
│   │   ├── workspace.xml
│   ├── dist/
│   │   ├── b2b_feed_standalone.html
│   ├── css/
│   │   ├── style.css
│   ├── img/
│   │   ├── img_logo_b64.js
│   │   ├── img_theme_b64.js
│   ├── js/
│   │   ├── data.js
│   │   ├── script.js
│   │   ├── texts.js
│   ├── src/
│   │   ├── index.html
│   │   ├── index.js
│   ├── package.json
│   ├── package-lock.json
│   ├── webpack.config.js
│   ├── site.webmanifest
│   ├── requirements.txt        # Abhängigkeiten für HTML_B2B_Form
│   └── ...
├── .git/                       # Git-Verzeichnis für das Hauptprojekt
├── .idea/                      # IntelliJ IDEA Projektdateien
│   ├── misc.xml
│   ├── modules.xml
│   ├── workspace.xml
│   └── ...
├── README.md                   # Projektbeschreibung
├── requirements.txt            # Python-Abhängigkeiten für das Hauptprojekt
├── package.json                # npm-Abhängigkeiten für das Hauptprojekt
│   └── node_modules/
│       ├── axios/              # Beispiel für eine npm-Bibliothek
│       ├── ...
└── zulu/                       # Zulu JDK Verzeichnis
    ├── bin/
    ├── lib/
    └── ...
```
    
### Erläuterungen zu den Projekt-Folder/Dateien

- **venv/**: Enthält virtuelle Umgebung fürs gesamte Projekt, wodurch Python-Abhängigkeiten isoliert und verwaltet werden.
- **ocr_enricher/**, **template_center/**, **text_anonymizer/**, **html_b2b_form/**: Jedes dieser Verzeichnisse repräsentiert ein Submodul, enthält ein eigenes `.git`-Verzeichnis und eine eigene `requirements.txt`, um spezifische Abhängigkeiten zu verwalten.
- **.git/**: Git-Verzeichnis des Hauptprojekts.
- **.idea/**: Konfigurationsdateien für IntelliJ IDEA, die projektübergreifende Einstellungen speichern.
- **README.md**: Beschreibung des Projekts.
- **requirements.txt**: Liste der Python-Abhängigkeiten für das Hauptprojekt.
- **package.json**: Liste der npm-Abhängigkeiten für das Hauptprojekt.
- **node_modules/**: Enthält installierte npm-Bibliotheken.
- **zulu/**: Verzeichnis für das Zulu JDK, das als Java SDK verwendet wird.
 
### 2. Systemvoraussetzungen

#### Software
1. **Windows-Betriebssystem:**
   - **Edition:** Windows 10 Enterprise Version 22H2
2. **Git for Windows:**
   - **Path:** C:\Program Files\Git\cmd
3. **IntelliJ IDEA:**
   - **Edition:** Ultimate 2024.1
5. **Python virtuelle Umgebungen:**
   - zur Isolation und Verwaltung von Python-Abhängigkeiten innerhalb des Projekts (Details im Abschnitt 6 Konfiguration IntelliJ).
6. **Unternehmens-Proxy Zertifikat:**
   - Zertifikat wird aus dem Intranet (Dokumentationen IT Developer-Gilden) heruntergeladen
   - Details zur Einrichtung finden sich in Abschnitt 6 Konfiguration IntelliJ.

#### Komponenten und Berechtigungen
1. **Lokale Administratorrechte:** zur Installation lokaler Software und die Konfiguration des lokalen Systems.

2. **GitHub-Repositories (PrinceEitel, privater Account):**
   - **Main:** https://github.com/PrinceEitel/Data_Suite (alias data_suite) - Sichtbarkeit: Public
   - **Submodule:**
     - OCR_Manager_Suite: https://github.com/PrinceEitel/OCR_Manager_Suite - Sichtbarkeit: Public
     - Template_Center: https://github.com/PrinceEitel/Template_Center - Sichtbarkeit: Private
     - Text_Anonymizer: https://github.com/PrinceEitel/Text_Anonymizer - Sichtbarkeit: Private
     - html_b2b_form: https://github.com/PrinceEitel/html_b2b_form - Sichtbarkeit: Private

3. **Proxy zur Überbrückung von Firewall-Einschränkungen:**
   - **Einstellung der Proxy-Umgebungsvariablen:**
     - HTTP_PROXY und HTTPS_PROXY müssen für den Zugriff auf GitHub und andere externe Ressourcen konfiguriert werden. Dies kann in der `.gitconfig` oder in den Umgebungsvariablen erfolgen.

#### Netzwerk- und Ausführungsrechte

1. **Netzwerk- und Ausführungsrechte zum unregelmässigen und regelmässigen Austausch:**
   - **Netzwerkzugriff:** Sicherstellen, dass keine Netzwerkrestriktionen den Zugriff auf GitHub und andere benötigte Ressourcen blockieren. 
     - https://www.jetbrains.com/idea/download/ => JetBrains-Website für IntelliJ IDEA Ultimate
     - www.npmjs.com => node.js (JavaScript package manager)  
     - www.azul.com/downloads/#zulu => Azul Zulu JDK (certified build of OpenJDK)
     - www.github.com => GitHub (für Download und die Synchronisation der Repositorys muss der Zugriff auf GitHub gewährleistet sein.)
     - https://webpack.js.org => webpack.js (extensible and configurable static module bundler for JavaScript applications)
     - https://pypi.org/project/pdf-utils => pdf_utils.py (verwendet PyPDF2)
     - https://pypi.org/project/chardet   => Chardet (Universal Character Encoding Detector)

**Quellen:**
- [Setting Up Git Behind a Proxy](https://stackoverflow.com/questions/783811/getting-git-to-work-with-a-proxy-server-fails-with-request-timed-out)
- [Cloning GitHub Repository Behind Corporate Proxy](https://stackoverflow.com/questions/34988038/git-clone-behind-corporate-proxy)

### 3. Installation und Basiskonfigurationen

#### Git Installation
**Installation von GIT for Windows:**

1. **Download und Installation von GIT for Windows:** via Git-Website: [git-scm.com](https://git-scm.com/) mit Standardeinstellungen

2. **Überprüfen der GIT Installation:**
```bash
     git --version
```     
  - Ergebnis sollte eine Ausgabe ähnlich wie `git version 2.x.x` sein.

#### IntelliJ IDEA Installation
**Installation von IntelliJ IDEA Ultimate 2024.1:**

1. **Download und Installation von IntelliJ IDEA:** via JetBrains-Website: [jetbrains.com/idea/download](https://www.jetbrains.com/idea/download/) mit Standardeinstellungen.
   - Ultimate Edition wählen und Installationsdatei für Windows herunterladen.

#### SSH-Schlüssel erstellen und konfigurieren
**Schritt-für-Schritt-Anleitung zur Erstellung und Konfiguration eines SSH-Schlüssels für GitHub:**

1. **SSH-Schlüssel generieren:**
   - PowerShell oder Eingabeaufforderung öffnen.
   - neuen SSH-Schlüssel generieren:
```bash
     ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```         
- Enter drücken, um den Standardspeicherort (C:\Users\<IhrBenutzername>\.ssh\id_rsa) zu akzeptieren.
   - bei Aufforderung ein sicheres Passwort eingeben (optional).

2. **SSH-Agent starten und Schlüssel hinzufügen:**
   - Starten des SSH-Agenten im Hintergrund:
```bash
    Start-Service ssh-agent
```         
- SSH-Schlüssel dem Agenten hinzufügen:
```bash
     ssh-add C:\Users\<IhrBenutzername>\.ssh\id_rsa
 ``` 
3. **Öffentlichen SSH-Schlüssel kopieren:**
   - Inhalt des öffentlichen Schlüssels in die Zwischenablage kopieren:
```bash
     Get-Content C:\Users\<IhrBenutzername>\.ssh\id_rsa.pub | Set-Clipboard
 ```   
4. **SSH-Schlüssel zum GitHub-Konto hinzufügen:**
   - bei GitHub anmelden.
   - zu `Settings navigieren -> SSH and GPG keys -> New SSH key`.
   - kopierten Schlüssel einfügen und speichern.

5. **Verbindung zu GitHub testen:**
   - Verbindung zu GitHub testen:
```bash
     ssh -T git@github.com
```     
#### Vorab-Check der GIT Konfigurationen (global)
**Überprüfen der GIT-Konfiguration:**

1. **Git-Konfigurationsdatei überprüfen:**
   - Git-Konfiguration überprüfen:
```bash
     git config --global --list
```     
- sicherstellen, dass Name und E-Mail-Adresse korrekt konfiguriert sind:
```bash
     git config --global user.name "Ihr Name"
     git config --global user.email "youremail@example.com"
 ```    
**Überprüfen der Proxy-Einstellungen (falls erforderlich):**
1. **Proxy-Einstellungen für Git konfigurieren:**
   - bei Arbeiten hinter einem Proxy, müssen möglicherweise die Proxy-Einstellungen konfiguriert werden:
```bash
     git config --global http.proxy http://username:password@proxy-server:port
     git config --global https.proxy https://username:password@proxy-server:port
 ```    
**Überprüfen der Netzwerkeinstellungen:**
1. **DNS-Auflösung für GitHub überprüfen:**
```bash
     nslookup github.com
```     
2. **Verbindung zu GitHub überprüfen:**
   - Verbindung zu GitHub über das Internet überprüfen:
```bash
     Test-NetConnection -ComputerName github.com -Port 22
```     
### 4.GIT Setup Main

#### Hauptprojekt aus GitHub erstellen
**Erstellen des GitHub-Repositorys für `Data_Suite`:**

1. **Erstellen des GitHub-Repositorys:**
   - zu [GitHub](https://github.com) gehen und sich mit privaten Account (PrinceEitel) anmelden.
   - Plus-Symbol (+) in der oberen rechten Ecke anklicken und "New repository" wählen.
   - Namen `Data_Suite` eingeben.
   - gewünschte Sichtbarkeit (Public oder Private) wählen.
   - auf "Create repository" klicken.

2. **Initialisierung des lokalen GIT-Repositorys:**
   - Eingabeaufforderung (Cmd) oder PowerShell öffnen.
   - zum gewünschten Verzeichnis navigieren, in dem das Projekt erstellt werden soll:
```powershell
     cd U:\data_suite
```     
- neues GIT-Repository initialisieren:
```powershell
     git init
 ```
3. **Hauptbranch umbenennen und Änderungen pushen:**
   - Hauptbranch in `main` umbenennen:
```powershell
     git branch -M main
 ```   
- Änderungen zum Remote-Repository pushen:
```powershell
     git push -u origin main
```
4. **Verbindung zum Remote-Repository herstellen:**
   - Remote-Repository hinzufügen:
```powershell
     git remote add origin https://github.com/PrinceEitel/Data_Suite.git
```     
- Verbindung zum Remote-Repository überprüfen:
```powershell
     git remote -v
```     
- URLs für `fetch` und `push` sollten jetzt erscheinen, die mit dem GitHub-Repository verbunden sind.

5. **Überprüfung der Verzeichnisse und bestehenden GIT-Repositories Main:**
   -  Überprüfen, ob das data_suite Verzeichnis bereits existiert: 
```powershell
     if (Test-Path "U:\data_suite") {
         Write-Host "Verzeichnis existiert bereits. Bitte ein anderes Verzeichnis wählen oder das bestehende löschen."
     } else {
         Write-Host "Verzeichnis existiert nicht. Fortfahren mit Erstellung."
     }
```
   -  sicherstellen,  dass keine bestehenden Git-Repositories im Zielverzeichnis vorhanden sind:
```powershell
     if (Test-Path "U:\data_suite\.git") {
         Write-Host "Ein Git-Repository existiert bereits in diesem Verzeichnis. Bitte löschen oder ein anderes Verzeichnis wählen."
     } else {
         Write-Host "Kein Git-Repository gefunden. Fortfahren mit Erstellung."
     }
```  
### 5. GIT Setup Submodule

#### Beschreibung der Konfigurationsdateien
- **.gitconfig Einstellungen für den Unternehmens-Account VX:**
   `.gitconfig`-Datei enthält die benutzerspezifischen Konfigurationen für Git. Für den Unternehmens-Account VX wird sie folgendermaßen eingerichtet:
```plaintext
  [filter "lfs"]
    clean = git-lfs clean -- %f
    smudge = git-lfs smudge -- %f
    process = git-lfs filter-process
    required = true
  [user]
    name = VX
    email = vx@company.com
  [safe]
    directory = U:/data_suite/text_anonymizer
    directory = U:/data_suite/template_center
    directory = U:/data_suite/OCR_Enricher
    directory = U:/data_suite/html_b2b_form
  [core]
    autocrlf = true
  [merge]
    tool = meld
  [rerere]
    enabled = true
```   
**Erklärungen:**
  - `[filter "lfs"]`: Einstellungen für Git Large File Storage (LFS), um große Dateien effizient zu verwalten.
  - `[user]`: Benutzername und E-Mail-Adresse für Git-Commits.
  - `[safe]`: Sichere Verzeichnisse, die Git-Befehle ausführen dürfen.
  - `[core]`: Core-Einstellungen wie `autocrlf`, das sicherstellt, dass Zeilenendungen korrekt gehandhabt werden.
  - `[merge]`: Merge-Tool, das für Konfliktlösungen verwendet wird.
  - `[rerere]`: Aktiviert die Wiederverwendung von aufgezeichneten Lösungen für Merge-Konflikte.

#### Zugriffsrechte konfigurieren
- **Einladen des VX-Accounts zu den privaten Repositories:**
  1. Navigieren Sie zu den Repository-Einstellungen der privaten Repositories (z.B. OCR_Manager_Suite, Template_Center, Text_Anonymizer und html_b2b_form).
  2. Gehen Sie zu `Settings -> Manage access`.
  3. Klicken Sie auf `Invite a collaborator` und geben Sie den VX-Account (z.B. `vx@company.com`) ein.
  4. Weisen Sie den entsprechenden Zugriff zu (z.B. `Write` oder `Admin`).

#### Vorab-Check der GIT Konfigurationen (Submodule-Ebene)
- **Überprüfung der GIT-Installation und Konfiguration:**
  1. Git Installation überprüfen:
```powershell
     git --version
```      
  2. überprüfen der Git-Konfiguration:
```powershell
     git config --global user.name
     git config --global user.email
```      
     
#### Submodule hinzufügen und konfigurieren
- **Hinzufügen der Submodule:**
```powershell
  git submodule add https://github.com/PrinceEitel/OCR_Manager_Suite.git ocr_enricher
  git submodule add https://github.com/PrinceEitel/Template_Center.git template_center
  git submodule add https://github.com/PrinceEitel/Text_Anonymizer.git text_anonymizer
  git submodule add https://github.com/PrinceEitel/html_b2b_form.git html_b2b_form
  git submodule init
  git submodule update
```     
- **Stagen und committen der Submodule:**
```powershell
  git add .gitmodules ocr_enricher template_center text_anonymizer html_b2b_form
  git commit -m "Submodule OCR_Manager_Suite, Template_Center, Text_Anonymizer und html_b2b_form hinzugefügt"
  git push origin main
```     
### 6. IntelliJ Setup

#### 1a. Vorab-Checks als Script

**Überprüfung der Installation und Konfiguration von IntelliJ via Script:**
1. **Ausführung des IntelliJ System-Check Powershell Script:**
   - zu finden im Anhang unter Hilfs- und Prüfungs-Scripts/"IntelliJ System-Check Powershell Script".
   - PS-Script vorab signieren: siehe 6.3. "Signieren von PowerShell-Skripten im IntelliJ Terminal"
   - ausführen im Terminal (Powershell) oder direkt im Windows
      ```Powershell
     .\intelliJ_system_check.ps1 -homeDir "U:\" 
 
#### 1b. Vorab-Checks (selektiv)

**selektive Überprüfung der Installation und Konfiguration von IntelliJ:**
1. **Installation überprüfen:**
   - Gehe zu `Help` -> `About` und stelle sicher, dass `IntelliJ IDEA Ultimate 2024.1` installiert ist.
2. **Plugins überprüfen:**
   - Navigiere zu `File` -> `Settings` -> `Plugins`.
   - Sicherstellen, dass Plugins für `Python`, `Git` und andere benötigte Tools installiert und aktiviert sind.
3. **Konfigurationsdateien prüfen:**
   - Sicherstellen, dass die Konfigurationsdateien im `.idea`-Verzeichnis vorhanden und korrekt sind (`misc.xml`, `modules.xml`, `compiler.xml`, `workspace.xml`, `vcs.xml`).

#### 2. IntelliJ Terminal konfigurieren

**Einstellungen für das Terminal:**
1. **Einstellungen öffnen:**
   - Navigiere zu `File` -> `Settings` (oder `Ctrl+Alt+S`).
2. **Terminal-Einstellungen:**
   - Gehe zu `Tools` -> `Terminal`.
3. **Shell Path festlegen:**
   - Für PowerShell: 
     ```Powershell
     Shell Path: C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe
     Shell Options: -NoLogo
     ```
   - Für Eingabeaufforderung (cmd):
     ```plaintext
     Shell Path: C:\Windows\System32\cmd.exe
     Shell Options: /K
     ```
4. **Konfiguration testen:**
   - Öffne das Terminal innerhalb von IntelliJ IDEA (`View` -> `Tool Windows` -> `Terminal`) und überprüfe die Einstellungen.

#### 3. Signieren von PowerShell-Skripten im IntelliJ Terminal

**Voraussetzungen:**
- PowerShell befindet sich im Verzeichnis `C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe`.
- Administratorrechte sind erforderlich.

**Erstellung eines selbstsignierten Zertifikats:**
1. **Zertifikat erstellen:**
   ```powershell
   $cert = New-SelfSignedCertificate -CertStoreLocation Cert:\CurrentUser\My -Subject "CN=MyScriptSigningCert" -KeyUsage DigitalSignature -Type CodeSigningCert
   ```
2. **Zertifikat exportieren:**
   ```powershell
   Export-Certificate -Cert $cert -FilePath "C:\Users\<IhrBenutzername>\MyScriptSigningCert.cer"
   ```
3. **Zertifikat importieren:**
   ```powershell
   Import-Certificate -FilePath "C:\Users\<IhrBenutzername>\MyScriptSigningCert.cer" -CertStoreLocation Cert:\LocalMachine\Root
   Import-Certificate -FilePath "C:\Users\<IhrBenutzername>\MyScriptSigningCert.cer" -CertStoreLocation Cert:\LocalMachine\TrustedPublisher
   ```
4. **Thumbprint ermitteln:**
   ```powershell
   $thumbprint = (Get-ChildItem -Path Cert:\CurrentUser\My | Where-Object {$_.Subject -eq "CN=MyScriptSigningCert"} | Select-Object -ExpandProperty Thumbprint)
   ```
5. **Skript signieren:**
   ```powershell
   Set-AuthenticodeSignature -FilePath "C:\path\to\script.ps1" -Certificate (Get-Item -Path Cert:\CurrentUser\My\$thumbprint)
   ```
6. **Ausführungsrichtlinie setzen:**
   ```powershell
   Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
   ```

#### 4. Virtuelle Umgebung einrichten

**Schritte zur Erstellung und Aktivierung einer virtuellen Umgebung:**
1. **Terminal öffnen:**
   - Öffne das Terminal in IntelliJ IDEA (`View` -> `Tool Windows` -> `Terminal`).
2. **Virtuelle Umgebung erstellen:**
   ```powershell
   python -m venv venv
   ```
3. **Virtuelle Umgebung aktivieren:**
   ```powershell
   venv\Scripts\activate
   ```
4. **Abhängigkeiten installieren:**
   ```powershell
   pip install -r requirements.txt
   ```

**Zusätzliche Schritte:**
1. **Installierte Pakete überprüfen:**
   ```powershell
   pip list
   ```
2. **Weitere Pakete hinzufügen:**
   ```powershell
   pip install <package-name>
   ```
3. **Kompatibilität sicherstellen:**
   - Überprüfen, ob alle notwendigen Pakete und deren Versionen korrekt installiert sind.

#### 5. Zulu JDK und andere notwendige Komponenten

**Installation und Konfiguration:**
1. **Zulu JDK installieren:**
   - Lade das Zulu JDK von der offiziellen Webseite herunter und installiere es.
2. **In IntelliJ konfigurieren:**
   - Gehe zu `File` -> `Project Structure` -> `Project Settings` -> `Project`.
   - Wähle das Zulu JDK als SDK aus und überprüfe den Pfad.
3. **Installation überprüfen:**
   - Sicherstellen, dass das Zulu JDK korrekt installiert ist und keine Fehlermeldungen auftreten.

**Installation von `chardet` und anderen Bibliotheken:**
1. **Bibliothek in der virtuellen Umgebung installieren:**
   ```powershell
   pip install chardet
   ```
2. **Installation überprüfen:**
   ```powershell
   pip show chardet
   ```

#### 6. Projekt importieren

**Schritte zum Importieren des Projekts `Data_Suite` in IntelliJ IDEA:**
1. **Projekt importieren:**
   - Öffne IntelliJ IDEA und navigiere zu `File` -> `New` -> `Project from Existing Sources...`.
   - Wähle das Verzeichnis `U:\data_suite` und folge den Anweisungen.
2. **Submodule konfigurieren:**
   - Gehe zu `File` -> `Settings` -> `Version Control` -> `Git`.
   - Sicherstellen, dass alle Submodule korrekt erkannt und konfiguriert sind.

#### 7. Python Interpreter konfigurieren

**Schritte zur Konfiguration des Python Interpreters:**
1. **Einstellungen öffnen:**
   - Gehe zu `File` -> `Settings` -> `Project: <Projektname>` -> `Python Interpreter`.
2. **Interpreter hinzufügen:**
   - Klicke auf das Zahnrad-Symbol und wähle `Add...`.
   - Wähle `Existing environment` und navigiere zum Python-Interpreter in der virtuellen Umgebung (`U:\data_suite\venv\Scripts\python.exe`).

#### 8. Quellverzeichnisse konfigurieren

**Relevante Verzeichnisse als Quellverzeichnisse markieren:**
1. **Projektstruktur öffnen:**
   - Gehe zu `File` -> `Project Structure`.
2. **Verzeichnisse markieren:**
   - Rechtsklick auf das Verzeichnis im Projektfenster -> `Mark Directory as` -> `Sources Root`.

#### 9. GIT-Integration im IntelliJ konfigurieren

**Überprüfung und Konfiguration der Git-Integration in IntelliJ IDEA:**
1. **Einstellungen öffnen:**
   - Gehe zu `File` -> `Settings` -> `Version Control` -> `Git`.
2. **Pfad zur Git-Installation überprüfen:**
   - Sicherstellen, dass der Pfad zur Git-Installation korrekt gesetzt ist (z.B., `C:\Program Files\Git\cmd\git.exe`).
3. **Git-Integration aktivieren:**
   - Überprüfen, ob die Git-Integration aktiviert ist und das Hauptprojekt sowie alle Submodule erkannt werden.
4. **Repository-Status überprüfen:**
   - Öffne das Terminal in IntelliJ IDEA und führe folgende Befehle aus:
   ```powershell
   git pull
   git submodule init
   git submodule update
   ```

#### 10. Konfiguration von npm in der virtuellen Umgebung

**Installation und Verwaltung von npm-Abhängigkeiten in einer zentralen virtuellen Umgebung:**
1. **Virtuelle Umgebung erstellen:**
   ```bash
   cd U:\data_suite
   mkdir venv
   ```
2. **Initiale Installation der Abhängigkeiten:**
   ```bash
   npm install --prefix ./venv
   ```
3. **Neue Abhängigkeiten hinzufügen:**
   ```bash
   npm install <paketname> --prefix ./venv --save
   ```
4. **Entwicklungsabhängigkeiten hinzufügen:**
   ```bash
   npm install <paketname> --prefix ./venv --save-dev
   ```
5. **Abhängigkeiten aktualisieren:**
   ```bash
   npm update --prefix ./venv
   ```
6. **Installierte Abhängigkeiten überprüfen:**
   ```bash
   npm list --prefix ./venv
   ```     
### 7. Entwicklung

#### Projektstruktur
- **Beschreibung der Projektstruktur und der einzelnen Dateien und Verzeichnisse:**
  - **Hauptverzeichnis (`data_suite`):** Enthält das gesamte Projekt und die grundlegenden Konfigurationsdateien wie `.gitignore`, `README.md`, und `requirements.txt`.
  - **Verzeichnis `src`**: Hauptverzeichnis für den Quellcode.
    - **Module `ocr_enricher`**: Enthält die Logik und Funktionen zur Texterkennung und Anreicherung.
      - `ocr_main.py`: Hauptdatei für OCR-Funktionen.
      - `utils/`: Hilfsfunktionen und Tools.
    - **Module `template_center`**: Verwaltung und Verarbeitung von Templates.
      - `template_main.py`: Hauptdatei für Template-Funktionen.
      - `templates/`: Sammlung von Vorlagen.
    - **Module `text_anonymizer`**: Funktionen zur Textanonymisierung.
      - `anonymizer_main.py`: Hauptdatei für Anonymisierungsfunktionen.
      - `rules/`: Anonymisierungsregeln und -muster.
    - **Module `html_b2b_form`**: Verarbeitung und Verwaltung von HTML-Formularen.
      - `form_main.py`: Hauptdatei für Formularfunktionen.
      - `forms/`: HTML-Formularvorlagen.
  - **Verzeichnis `tests`**: Enthält die Tests für das Projekt.
    - **Unit-Tests**: Getrennte Verzeichnisse für Tests der einzelnen Module (`test_ocr_enricher.py`, `test_template_center.py`, etc.).
  - **Konfigurationsdateien**:
    - `.gitignore`: Dateien und Verzeichnisse, die von Git ignoriert werden sollen.
    - `README.md`: Projektbeschreibung und Anleitungen.
    - `requirements.txt`: Liste der Python-Abhängigkeiten.
  - **Virtuelle Umgebung (`venv`)**: Enthält die Python-Umgebung und installierten Pakete.

#### Code-Beispiele
- **Ausführliche Erläuterung des Codes mit Beispielen und Erklärungen:**
  - **OCR Enricher Beispiel:**
```python
    # ocr_main.py
    import pytesseract
    from PIL import Image

    def extract_text_from_image(image_path):
        image = Image.open(image_path)
        text = pytesseract.image_to_string(image)
        return text

    if __name__ == "__main__":
        text = extract_text_from_image('sample_image.png')
        print(text)
    
- **Erläuterung:**
      - `pytesseract`: Bibliothek zur Texterkennung.
      - `PIL`: Bibliothek zur Bildverarbeitung.
      - `extract_text_from_image`: Funktion zur Extraktion von Text aus einem Bild.
``` 
  - **Template Center Beispiel:**
```python
    # template_main.py
    from jinja2 import Template

    def render_template(template_str, context):
        template = Template(template_str)
        return template.render(context)

    if __name__ == "__main__":
        template_str = "Hello, {{ name }}!"
        context = {"name": "World"}
        print(render_template(template_str, context))
```     
- **Erläuterung:**
      - `jinja2`: Template-Engine zur Verarbeitung von Vorlagen.
      - `render_template`: Funktion zur Verarbeitung und Ausgabe einer Vorlage mit Kontextdaten.

  - **Text Anonymizer Beispiel:**
```python
    # anonymizer_main.py
    import re

    def anonymize_text(text, patterns):
        for pattern in patterns:
            text = re.sub(pattern, "****", text)
        return text

    if __name__ == "__main__":
        text = "My phone number is 123-456-7890."
        patterns = [r"\d{3}-\d{3}-\d{4}"]
        print(anonymize_text(text, patterns))
 ```    
- **Erläuterung:**
      - `re`: Bibliothek zur Mustererkennung und -ersetzung.
      - `anonymize_text`: Funktion zur Anonymisierung von Texten anhand gegebener Muster.

#### Erweiterungsmöglichkeiten

- **Hinweise zur Erweiterung des Projekts um neue Funktionen:**
  - **Neue Module hinzufügen:**
    - Strukturieren Sie neue Module ähnlich den bestehenden (`src/new_module/`).
    - Erstellen Sie Hauptdateien und Unterverzeichnisse entsprechend den Anforderungen.
  - **Erweiterung bestehender Module:**
    - Fügen Sie neue Funktionen in den Hauptdateien hinzu.
    - Nutzen Sie bestehende Hilfsfunktionen und -klassen.
  - **Integration neuer Bibliotheken:**
    - Fügen Sie neue Abhängigkeiten in die `requirements.txt` ein.
    - Installieren Sie die neuen Pakete in der virtuellen Umgebung:
```python
      pip install -r requirements.txt
```       
- **Erweiterung der Tests:**
    - Erstellen neuer Testdateien für neue Module oder Funktionen.
    - vorhandene Testmuster und -strukturen nutzen.

### 8. Integration zentraler Konfigurationsdateien

#### Wichtige Konfigurationsdateien im .idea-Verzeichnis:
- **misc.xml**: Enthält allgemeine Projekteinstellungen wie das verwendete JDK, das Projektverzeichnis und den Compiler-Ausgabeort.
- **modules.xml**: Speichert Informationen über die Module des Projekts, deren Pfade und die zugehörigen Konfigurationsdateien.
- **compiler.xml**: Konfiguriert die Compiler-Einstellungen für das Projekt, einschließlich Compiler-Optionen und Ausgabeverzeichnisse.
- **workspace.xml**: Speichert benutzerspezifische Einstellungen wie die Anordnung von Fenstern, Editor-Tabs, laufende Aufgaben und andere projektspezifische Einstellungen.
- **vcs.xml**: Enthält die Versionskontrollsystem-Einstellungen für das Projekt, wie z.B. die Konfiguration der Git-Integration und andere VCS-spezifische Einstellungen.

#### Beispiele für zentrale Konfigurationsdateien:

- **misc.xml**
```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <project version="4">
    <component name="ProjectRootManager" version="2" project-jdk-name="Python 3.12" project-jdk-type="Python SDK">
      <output url="file://$PROJECT_DIR$/out" />
    </component>
  </project>
 ```  
- **Erklärung**: Diese Datei legt das Projekt-JDK auf "Python 3.12" fest und definiert das Ausgabeort für den Compiler.

- **modules.xml**
```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <project version="4">
    <component name="ProjectModuleManager">
      <modules>
        <module fileurl="file://$PROJECT_DIR$/data_suite.iml" filepath="$PROJECT_DIR$/data_suite.iml" />
        <module fileurl="file://$PROJECT_DIR$/ocr_enricher.iml" filepath="$PROJECT_DIR$/ocr_enricher.iml" />
        <module fileurl="file://$PROJECT_DIR$/template_center.iml" filepath="$PROJECT_DIR$/template_center.iml" />
        <module fileurl="file://$PROJECT_DIR$/text_anonymizer.iml" filepath="$PROJECT_DIR$/text_anonymizer.iml" />
        <module fileurl="file://$PROJECT_DIR$/html_b2b_form.iml" filepath="$PROJECT_DIR$/html_b2b_form.iml" />
      </modules>
    </component>
  </project>
 ```  
- **Erklärung**: Diese Datei listet alle Module des Projekts auf und definiert deren Pfade.

- **compiler.xml**
```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <project version="4">
    <component name="CompilerConfiguration">
      <option name="DEFAULT_COMPILER" value="Javac" />
      <resourceExtensions />
      <wildcardResourcePatterns>
        <entry name="!?*.java" />
      </wildcardResourcePatterns>
    </component>
  </project>
```   
- **Erklärung**: Datei konfiguriert die Compiler-Einstellungen und gibt an, dass Javac als Standard-Compiler verwendet wird.

- **workspace.xml**
```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <project version="4">
    <component name="RunManager">
      <configuration default="false" type="PythonConfigurationType" factoryName="Python">
        <module name="data_suite" />
        <option name="INTERPRETER_OPTIONS" value="" />
        <option name="PARENT_ENVS" value="true" />
        <option name="SDK_HOME" value="$USER_HOME$/Python/3.12" />
        <envs>
          <env name="PYTHONUNBUFFERED" value="1" />
        </envs>
        <option name="WORKING_DIRECTORY" value="$PROJECT_DIR$" />
        <option name="IS_MODULE_SDK" value="true" />
      </configuration>
    </component>
  </project>
```   
- **Erklärung**: Datei speichert benutzerspezifische Einstellungen für die Ausführung von Python-Skripten, einschließlich der Arbeitsverzeichnisse und Umgebungsvariablen.

- **vcs.xml**
```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <project version="4">
    <component name="VcsDirectoryMappings">
      <mapping directory="$PROJECT_DIR$" vcs="Git" />
    </component>
  </project>
```   
- **Erklärung**: Diese Datei definiert die Zuordnung des Projekts zu einem Versionskontrollsystem, in diesem Fall Git.

#### Verwendung zentraler Konfigurationsdateien:

- **Vorgehensweise zur Einbindung und Nutzung zentraler Konfigurationsdateien in der Versionskontrolle**:
  1. **Konfigurationsdateien in die Versionskontrolle aufnehmen**:
     -  `.idea`-Verzeichnis und die relevanten Konfigurationsdateien (`misc.xml`, `modules.xml`, `compiler.xml`, `workspace.xml`, `vcs.xml`) zu Ihrem Versionskontrollsystem (z.B. Git) hinzufügen.
     - Beispiel:
```powershell
       git add .idea/misc.xml .idea/modules.xml .idea/compiler.xml .idea/workspace.xml .idea/vcs.xml
       git commit -m "Added IntelliJ IDEA configuration files"
       git push origin main
 ```      
2. **Automatisierte Validierung**:
     - Verwenden Sie Skripte oder CI/CD-Pipelines, um die Integrität der Konfigurationsdateien zu überprüfen. Diese Skripte können sicherstellen, dass die Dateien nicht manuell geändert wurden und dass alle erforderlichen Einstellungen vorhanden sind.
	 
### 9. Fehlerbehebung und Support

#### Häufige Probleme und Lösungen

##### Probleme bei der Nutzung von GIT

1. **Fehler beim Klonen eines Repositories: `Permission denied (publickey)`**
   - **Ursache:** Der SSH-Schlüssel ist nicht korrekt eingerichtet oder GitHub akzeptiert den verwendeten Schlüssel nicht.
   - **Lösung:** 
     - Überprüfen Sie, ob der SSH-Schlüssel generiert und dem GitHub-Account hinzugefügt wurde:
```bash
       ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
       cat ~/.ssh/id_rsa.pub
``` 
- öffentlichen Schlüssel zu GitHub hinzufügen unter [SSH Keys](https://github.com/settings/keys).
     - SSH-Verbindung testen:
```bash
       ssh -T git@github.com
 ```       
2. **Fehler beim Pushen: `fatal: unable to access 'https://github.com/USER/REPO.git/': The requested URL returned error: 403`**
   - **Ursache:** Zugriffsrechte auf das Repository sind unzureichend.
   - **Lösung:** 
     - sicherstellen, dass die erforderlichen Berechtigungen für das Repository vorhanden sind.
     - Git-Konfiguration überprüfen:
```bash
       git config --global user.name "your_username"
       git config --global user.email "your_email@example.com"
```        
3. **Fehler beim Mergen: `CONFLICT (content): Merge conflict in file.txt`**
   - **Ursache:** Änderungen in der gleichen Datei widersprechen sich.
   - **Lösung:** 
     - Öffnen Sie die Datei mit Konflikten und beheben Sie die Konflikte manuell.
     - Stagen Sie die Änderungen und committen Sie sie:
```bash
       git add file.txt
       git commit -m "Resolved merge conflict in file.txt"
 ```       
4. **Fehler bei der Submodule-Aktualisierung: `fatal: no submodule mapping found in .gitmodules for path 'submodule_path'`**
   - **Ursache:** Die `.gitmodules`-Datei ist nicht korrekt konfiguriert oder wurde gelöscht.
   - **Lösung:** 
     - Überprüfen Sie die `.gitmodules`-Datei und stellen Sie sicher, dass alle Submodule korrekt aufgeführt sind.
     - Initialisieren und aktualisieren Sie die Submodule erneut:
```bash
       git submodule init
       git submodule update
```        
##### Probleme bei der Nutzung von IntelliJ IDEA

1. **Problem beim Starten von IntelliJ IDEA: `IDE hangs or crashes`**
   - **Ursache:** Möglicherweise inkompatible Plugins oder fehlerhafte Konfigurationsdateien.
   - **Lösung:** 
     - IntelliJ IDEA im abgesicherten Modus starten:
```plaintext
       Help -> Find Action -> Safe Mode
```        
- Deaktivieren oder entfernen kürzlich installierter Plugins.

2. **Problem mit der virtuellen Umgebung: `Python interpreter not configured`**
   - **Ursache:** Die virtuelle Umgebung ist nicht korrekt eingerichtet oder aktiviert.
   - **Lösung:** 
     - sicherstellen, dass die virtuelle Umgebung korrekt erstellt wurde:
```bash
       python -m venv venv
```        
- virtuelle Umgebung aktivieren:
```bash 
       venv\Scripts\activate     # On Windows
```        
- Python Interpreter in IntelliJ IDEA konfigurieren:
```plaintext
       File -> Settings -> Project: <project_name> -> Python Interpreter
```        
3. **Fehlerhafte Projektstruktur: `Cannot resolve symbol`**
   - **Ursache:** Quellverzeichnisse sind nicht korrekt markiert.
   - **Lösung:** 
     - Markieren der relevanten Verzeichnisse als Quellverzeichnisse:
```plaintext
       Rechtsklick auf das Verzeichnis -> Mark Directory as -> Sources Root
```        
4. **Fehlerhafte Git-Integration: `Unable to fetch changes`**
   - **Ursache:** Git-Konfiguration in IntelliJ IDEA ist fehlerhaft.
   - **Lösung:** 
     - Überprüfen Sie die Git-Einstellungen:
```plaintext
       File -> Settings -> Version Control -> Git
```        
- sicherstellen, dass der Pfad zur Git-Installation korrekt ist.


#### Probleme bei der Nutzung von IntelliJ IDEA und Terminals

**Problem 1: AuthorizationManager check failed**

**Ursache:**
Das System führt das signierte Skript nicht aus, da der Publisher nicht als vertrauenswürdig eingestuft wird.

**Lösung:**

1. **Verifizierung des Zertifikats im vertrauenswürdigen Stammzertifikatspeicher:**
   ```powershell
   Get-ChildItem -Path Cert:\LocalMachine\Root | Where-Object {$_.Subject -eq "CN=MyScriptSigningCert"}
   ```

2. **Hinzufügen des Zertifikats zu den vertrauenswürdigen Herausgebern:**
   ```powershell
   Import-Certificate -FilePath "C:\Users\<IhrBenutzername>\MyScriptSigningCert.cer" -CertStoreLocation Cert:\LocalMachine\TrustedPublisher
   ```

3. **Überprüfen, ob das Zertifikat für die Code-Signatur geeignet ist:**
   ```powershell
   $cert = Get-ChildItem -Path Cert:\CurrentUser\My\<Thumbprint>
   $cert.Extensions | Format-List
   ```

4. **Skripte erneut signieren und das Vertrauen bestätigen:**
   ```powershell
   Set-AuthenticodeSignature -FilePath "C:\path\to\script.ps1" -Certificate $cert
   ```

5. **Aktualisieren der PowerShell-Ausführungsrichtlinie:**
   ```powershell
   Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
   ```

6. **Neustart der PowerShell-Sitzung und IntelliJ IDEA:**

**Problem 2: UnknownError beim Signieren eines Skripts**

**Ursache:**
Das Zertifikat ist möglicherweise nicht richtig konfiguriert oder nicht für die Codesignatur geeignet.

**Lösung:**

1. **Erstellen eines Codesignaturzertifikats:**
   ```powershell
   $cert = New-SelfSignedCertificate -CertStoreLocation Cert:\CurrentUser\My -Subject "CN=MyScriptSigningCert" -KeyUsage DigitalSignature -Type CodeSigningCert
   ```

2. **Exportieren und Importieren des Zertifikats:**
   ```powershell
   Export-Certificate -Cert $cert -FilePath "C:\Users\<IhrBenutzername>\MyScriptSigningCert.cer"
   Import-Certificate -FilePath "C:\Users\<IhrBenutzername>\MyScriptSigningCert.cer" -CertStoreLocation Cert:\LocalMachine\Root
   Import-Certificate -FilePath "C:\Users\<IhrBenutzername>\MyScriptSigningCert.cer" -CertStoreLocation Cert:\LocalMachine\TrustedPublisher
   ```

3. **Signieren des Skripts:**
   ```powershell
   Set-AuthenticodeSignature -FilePath "C:\path\to\script.ps1" -Certificate (Get-Item -Path Cert:\CurrentUser\My\<Thumbprint>)
   ```

**Problem 3: Fehler bei der Ausführung des Skripts im IntelliJ Terminal**

**Ursache:**
Das Skript wird möglicherweise als "Remote" betrachtet und muss daher signiert sein, um den `AllSigned` Richtlinien zu entsprechen.

**Lösung:**
sicherstellen, dass alle Skripte, die im IntelliJ Terminal ausgeführt werden, korrekt signiert und die Zertifikate im vertrauenswürdigen Stammzertifikatspeicher und TrustedPublisher-Store importiert sind.

##### Proxy und Firewall

1. **Problem beim Zugriff auf GitHub hinter einem Proxy: `Could not resolve host: github.com`**
   - **Ursache:** Der Proxy ist nicht korrekt konfiguriert oder blockiert den Zugriff.
   - **Lösung:** 
     - sicherstellen, dass die Proxy-Einstellungen korrekt sind:
```bash
       git config --global http.proxy http://proxyuser:proxypassword@proxy.server.com:port
       git config --global https.proxy https://proxyuser:proxypassword@proxy.server.com:port
```        
- Überprüfen der DNS-Auflösung:
```bash
       nslookup github.com
```        
- Konfigurieren des Proxy in IntelliJ IDEA:
```plaintext
       File -> Settings -> Appearance & Behavior -> System Settings -> HTTP Proxy
```        
##### Zugriff auf Portale und Download-Seiten

1. **Zugriffsprobleme auf Download-Seiten: `Access Denied`**
   - **Ursache:** Firewall oder Netzwerkbeschränkungen blockieren den Zugriff.
   - **Lösung:** 
     - beim Netzwerkadministrator die Freigabe der benötigten URLs beantragen

### 10. Glossar
**Repository (Repo)**
- **Definition:** Ein Speicherort, in dem der gesamte Code, die Historie und die Konfigurationsdateien eines Projekts gespeichert werden.
- **Verwendung im Leitfaden:** Das Data_Suite-Projekt und seine Submodule werden als Repositories auf GitHub gehostet.
- **Besonderheiten:** Repositories ermöglichen die Nachverfolgung aller Änderungen im Code und bieten eine zentrale Quelle für die Zusammenarbeit.
- **Vorteile:** Zentralisierte Speicherung, Versionskontrolle, einfache Zusammenarbeit.

**Submodule**
- **Definition:** Ein Git-Repository, das innerhalb eines anderen Git-Repositorys enthalten ist.
- **Verwendung im Leitfaden:** Submodule wie OCR_Manager_Suite, Template_Center, Text_Anonymizer und html_b2b_form sind Teile des Data_Suite-Projekts.
- **Besonderheiten:** Ermöglichen die Integration und Verwaltung externer Projekte innerhalb eines Hauptprojekts.
- **Vorteile:** Wiederverwendbarkeit von Code, Modularität.
- **Nachteile:** Komplexere Verwaltung und Aktualisierung, potenzielle Synchronisierungsprobleme.

**Branch**
- **Definition:** Eine parallele Version eines Repositories, die unabhängig von der Hauptlinie der Entwicklung geändert werden kann.
- **Verwendung im Leitfaden:** Branches werden genutzt, um neue Features zu entwickeln oder Bugs zu beheben, ohne die stabile Version des Projekts zu beeinflussen.
- **Besonderheiten:** Erlauben es, verschiedene Entwicklungsstränge zu pflegen und später zusammenzuführen.
- **Vorteile:** Isolierte Entwicklung, risikofreie Experimente.
- **Nachteile:** Potenzielle Konflikte beim Zusammenführen (Mergen).

**Continuous Integration (CI)**
- **Definition:** Ein Softwareentwicklungsprozess, bei dem alle Entwickler ihre Arbeit häufig (mehrmals täglich) in ein zentrales Repository integrieren.
- **Verwendung im Leitfaden:** CI kann eingesetzt werden, um sicherzustellen, dass das Projekt stets in einem funktionsfähigen Zustand bleibt.
- **Besonderheiten:** Automatisierte Builds und Tests, um Integrationsfehler frühzeitig zu erkennen.
- **Vorteile:** Frühzeitige Fehlererkennung, konstante Codequalität.
- **Nachteile:** Erfordert initiale Einrichtung und kontinuierliche Wartung.

**SSH (Secure Shell)**
- **Definition:** Ein Netzwerkprotokoll, das einen sicheren Zugriff auf einen entfernten Computer ermöglicht.
- **Verwendung im Leitfaden:** SSH wird für die sichere Authentifizierung und Verbindung zu GitHub verwendet.
- **Besonderheiten:** Verschlüsselte Kommunikation, Authentifizierung über Schlüsselpaare.
- **Vorteile:** Hohe Sicherheit, Schutz vor Man-in-the-Middle-Angriffen. 

**SSH-Agent**
- **Definition:** Ein Programm, das SSH-Schlüssel im Speicher hält und die Wiederholung der Passworteingabe beim Herstellen von SSH-Verbindungen vermeidet.
- **Verwendung im Leitfaden:** Der SSH-Agent wird verwendet, um SSH-Schlüssel zu verwalten und die Authentifizierung gegenüber GitHub zu erleichtern.
- **Besonderheiten:** Ermöglicht das Zwischenspeichern von Passphrasen, sodass der Benutzer nicht bei jeder Verbindung die Passphrase eingeben muss.
- **Vorteile:** Erhöhte Benutzerfreundlichkeit, verbesserte Sicherheit.
- **Nachteile:** Potenzielle Sicherheitsrisiken, wenn der Agent kompromittiert wird.

**Virtuelle Umgebung (Virtual Environment)**
- **Definition:** Eine isolierte Python-Umgebung, die es ermöglicht, Abhängigkeiten separat vom globalen Python-Interpreter zu verwalten.
- **Verwendung im Leitfaden:** Virtuelle Umgebungen werden verwendet, um die Abhängigkeiten des Data_Suite-Projekts zu isolieren und zu verwalten.
- **Besonderheiten:** Jede virtuelle Umgebung kann ihre eigenen Versionen von Python-Paketen haben, unabhängig vom globalen Installationspfad.
- **Vorteile:** Verhindert Versionskonflikte, erleichtert das Projektmanagement.
- **Nachteile:** Zusätzlicher Verwaltungsaufwand, Speicherplatzbedarf.

**jinja2**
- **Definition:** Ein modernes und flexibles Templating-System für Python, das es ermöglicht, HTML, XML oder andere Markup-Sprachen im Textformat zu generieren.
- **Verwendung im Leitfaden:** Jinja2 wird verwendet, um dynamische Inhalte in HTML-Dateien für das Data_Suite-Projekt zu erzeugen.
- **Besonderheiten:** Bietet leistungsstarke Template-Erweiterungsmechanismen und Steuerungsstrukturen.
- **Vorteile:** Flexible und wiederverwendbare Templates, einfache Integration in Webanwendungen.
- **Nachteile:** Lernkurve für neue Benutzer, Performance-Overhead bei komplexen Templates.

**HTTP_PROXY**
- **Definition:** Umgebungsvariable, die den HTTP-Proxy-Server spezifiziert, der für HTTP-Anfragen verwendet werden soll.
- **Verwendung im Leitfaden:** HTTP_PROXY wird konfiguriert, um Netzwerkverkehr durch einen Proxy zu leiten, insbesondere in einer Unternehmensumgebung mit Firewall-Beschränkungen.
- **Besonderheiten:** Notwendig für den Zugriff auf das Internet hinter einem Unternehmensproxy.
- **Vorteile:** Ermöglicht die Verbindung zu externen Ressourcen trotz Netzwerkbeschränkungen. 

**pip install <package-name>**
- **Definition:** Ein Befehl des Python-Paketmanagers `pip`, der ein bestimmtes Python-Paket aus dem Python Package Index (PyPI) installiert.
- **Verwendung im Leitfaden:** Dieser Befehl wird verwendet, um die notwendigen Abhängigkeiten für das Data_Suite-Projekt zu installieren.
- **Besonderheiten:** Installiert Pakete und deren Abhängigkeiten in die aktuelle Python-Umgebung.
- **Vorteile:** Einfache Paketverwaltung, Zugriff auf eine große Anzahl von Bibliotheken.
- **Nachteile:** Abhängigkeit von der Verfügbarkeit von Paketen in PyPI, potenzielle Konflikte bei Paketversionen.

**Zulu JDK**
- **Definition:** Eine zertifizierte, zu 100 % offene Version des Java Development Kit (JDK), basierend auf OpenJDK und unterstützt von Azul Systems.
- **Verwendung im Leitfaden:** Zulu JDK wird als Java SDK verwendet, um Java-basierte Teile des Data_Suite-Projekts zu kompilieren und auszuführen.
- **Besonderheiten:** Kompatibel mit allen Java SE-Standards und regelmäßigen Sicherheitsupdates.
- **Vorteile:** Kostenlose Nutzung, kommerzielle Unterstützung verfügbar. 

**Markieren relevanter Verzeichnisse als Root, Test, Resources, etc.**
- **Definition:** Eine Funktion in IntelliJ IDEA, um Verzeichnisse innerhalb eines Projekts als spezifische Quelltypen (z.B. `Sources Root`, `Test Sources Root`, `Resources`) zu kennzeichnen.
- **Verwendung im Leitfaden:** Diese Markierungen helfen IntelliJ IDEA, den Code korrekt zu organisieren und zu verarbeiten, z.B. Testdateien von Produktionscode zu unterscheiden.
- **Besonderheiten:** IntelliJ verwendet diese Markierungen, um den Inhalt zu indizieren und entsprechende Werkzeuge wie den Compiler oder die Laufzeitumgebung korrekt zu konfigurieren.
- **Vorteile:** Verbesserte Projektorganisation, spezifische Werkzeuge für verschiedene Verzeichnistypen.
- **Nachteile:** Falsche Markierungen können zu Fehlern bei der Kompilierung oder Laufzeit führen.

**Unit-Tests**
- **Definition:** Automatisierte Tests, die einzelne Einheiten oder Komponenten einer Software isoliert und unabhängig voneinander testen, um sicherzustellen, dass sie korrekt funktionieren.
- **Verwendung im Leitfaden:** Unit-Tests werden verwendet, um die Funktionalität einzelner Komponenten des Data_Suite-Projekts zu überprüfen und zu validieren.
- **Besonderheiten:** Tests werden typischerweise für Funktionen, Methoden oder Klassen geschrieben und sollen alle möglichen Eingabewerte abdecken.
- **Vorteile:** Frühzeitige Fehlererkennung, verbesserte Codequalität, erleichterte Refaktorisierung.
- **Nachteile:** Erfordert zusätzlichen Aufwand für das Schreiben und Pflegen der Tests, mögliche Verzögerungen durch langsame Testausführung bei großen Testmengen.

### 11. Anhang

#### Zusätzliche Informationen

Dieser Abschnitt bietet weiterführende Informationen und Ressourcen, die für das Verständnis und die erfolgreiche Umsetzung des Data_Suite-Projekts hilfreich sein können. 

**1. Offizielle Dokumentationen und Ressourcen:**

- **Git Dokumentation:** Die offizielle Git-Dokumentation bietet umfassende Informationen zu allen Aspekten von Git, einschließlich Befehlen, Workflows und Best Practices.
  - [Git Documentation](https://git-scm.com/doc)

- **IntelliJ IDEA Dokumentation:** Die offizielle Dokumentation von IntelliJ IDEA bietet Anleitungen zur Installation, Konfiguration und Nutzung der IDE, einschließlich spezieller Funktionen und Plugins.
  - [IntelliJ IDEA Documentation](https://www.jetbrains.com/idea/documentation/)

- **Python Dokumentation:** Die offizielle Python-Dokumentation bietet umfassende Informationen zur Python-Programmiersprache, einschließlich Tutorials, Bibliotheken und Referenzen.
  - [Python Documentation](https://docs.python.org/3/)

**2. Tutorials und Leitfäden:**

- **Atlassian Git Tutorials:** Eine Sammlung von Tutorials, die verschiedene Aspekte von Git erklären, von den Grundlagen bis zu fortgeschrittenen Themen wie Branching und Merging.
  - [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)

- **JetBrains Blog:** Der offizielle Blog von JetBrains bietet Artikel, Tipps und Tutorials zu IntelliJ IDEA und anderen JetBrains-Produkten.
  - [JetBrains Blog](https://blog.jetbrains.com/)

- **GitHub Guides:** Eine Sammlung von Anleitungen und Tutorials zu GitHub, die Themen wie das Erstellen und Verwalten von Repositories, das Arbeiten mit Pull Requests und das Verwenden von GitHub Actions abdecken.
  - [GitHub Guides](https://guides.github.com/)

**3. Best Practices und Workflows:**

- **Git Best Practices:** Eine Übersicht über empfohlene Praktiken für die Arbeit mit Git, einschließlich Commit-Nachrichten, Branching-Strategien und Konfliktlösung.
  - [Git Best Practices](https://sethrobertson.github.io/GitBestPractices/)

- **Python Packaging Best Practices:** Eine Anleitung zur besten Vorgehensweise für das Erstellen und Verwalten von Python-Paketen, einschließlich virtueller Umgebungen und Abhängigkeitsverwaltung.
  - [Python Packaging Best Practices](https://packaging.python.org/guides/)

**4. Hilfreiche Tools und Plugins:**

- **GitLens für Visual Studio Code:** Ein beliebtes Plugin für Visual Studio Code, das erweiterte Git-Funktionalitäten bietet, einschließlich Historie, Blame-Ansichten und Commit-Nachverfolgung.
  - [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

- **Python Environment Manager (Pyenv):** Ein Tool zum Verwalten mehrerer Python-Versionen und virtueller Umgebungen auf einem System.
  - [Pyenv](https://github.com/pyenv/pyenv)

- **IntelliJ IDEA Plugins:** Eine Sammlung von nützlichen Plugins für IntelliJ IDEA, die die Produktivität steigern und die Arbeit mit verschiedenen Technologien und Sprachen erleichtern.
  - [IntelliJ IDEA Plugins](https://plugins.jetbrains.com/idea)

**5. Sicherheitsressourcen:**

- **OWASP (Open Web Application Security Project):** Eine gemeinnützige Organisation, die sich der Verbesserung der Software-Sicherheit widmet. Ihre Ressourcen sind besonders hilfreich für die Sicherung von Webanwendungen.
  - [OWASP](https://owasp.org/)

- **GitHub Security Best Practices:** Eine Anleitung zu den besten Sicherheitspraktiken auf GitHub, einschließlich der Verwaltung von Zugangsschlüsseln und der Verwendung von Sicherheitsfeatures.
  - [GitHub Security Best Practices](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure)

**6. Community und Support:**

- **Stack Overflow:** Eine der größten Online-Communities für Entwickler, die Hilfe und Antworten zu einer Vielzahl von Programmier- und Technologiefragen bietet.
  - [Stack Overflow](https://stackoverflow.com/)

- **GitHub Community Forum:** Ein Forum, in dem GitHub-Benutzer Fragen stellen und Antworten von der Community und GitHub-Mitarbeitern erhalten können.
  - [GitHub Community Forum](https://github.community/)

- **IntelliJ IDEA Community:** Ein Forum für IntelliJ IDEA-Benutzer, um Fragen zu stellen, Tipps auszutauschen und Hilfe von anderen Benutzern und JetBrains-Mitarbeitern zu erhalten.
  - [IntelliJ IDEA Community](https://intellij-support.jetbrains.com/hc/en-us/community/topics)
 
#### Hilfs- und Prüfungs-Scripts

**1. Konfigurationsprüfung:**

- **IntelliJ System-Check Powershell Script:**  
```powershell
# intelliJ_system_check.ps1
# Beispiele für das Ausführungskommando des PowerShell-Skripts mit einem dynamischen Home-Verzeichnis-Pfad:

# Beispiel 1: Home-Verzeichnis ist `U:\`
# Das Skript wird mit dem Home-Verzeichnis `U:\` ausgeführt.
# Dies wird das `data_suite` Verzeichnis unter `U:\` annehmen.

#.\intelliJ_system_check.ps1 -homeDir "U:\"


# Beispiel 2: Home-Verzeichnis ist `C:\`
# Das Skript wird mit dem Home-Verzeichnis `C:\` ausgeführt.
# Dies wird das `data_suite` Verzeichnis unter `C:\` annehmen.

#.\intelliJ_system_check.ps1 -homeDir "C:\"

# Beispiel 3: Home-Verzeichnis ist `C:\users\test\`
# Das Skript wird mit dem Home-Verzeichnis `C:\users\test\` ausgeführt.
# Dies wird das `data_suite` Verzeichnis unter `C:\users\test\` annehmen.

#.\intelliJ_system_check.ps1 -homeDir "C:\users\test\"

param (
    [string]$homeDir = "U:\"
)

$outputFile = "${homeDir}data_suite\system_check_results.txt"

function Write-Result {
    param ($message)
    $message | Out-File -FilePath $outputFile -Append
    Write-Host $message
}

# Überprüfung der Git-Installation und Konfiguration
Write-Result "Überprüfung der Git-Installation und Konfiguration:"
Write-Result "-------------------------------------------"
Write-Result "Git Version:"
git --version | Out-File -FilePath $outputFile -Append
Write-Result "Git Benutzername:"
git config --global user.name | Out-File -FilePath $outputFile -Append
Write-Result "Git Benutzer E-Mail:"
git config --global user.email | Out-File -FilePath $outputFile -Append

# Überprüfung der Verzeichnisse und bestehenden Git-Repositories
Write-Result "`nÜberprüfung der Verzeichnisse und bestehenden Git-Repositories:"
Write-Result "-------------------------------------------"
if (Test-Path "${homeDir}data_suite") {
    Write-Result "Verzeichnis existiert bereits. Bitte ein anderes Verzeichnis wählen oder das bestehende löschen."
} else {
    Write-Result "Verzeichnis existiert nicht. Fortfahren mit Erstellung."
}
if (Test-Path "${homeDir}data_suite\.git") {
    Write-Result "Ein Git-Repository existiert bereits in diesem Verzeichnis. Bitte löschen oder ein anderes Verzeichnis wählen."
} else {
    Write-Result "Kein Git-Repository gefunden. Fortfahren mit Erstellung."
}

# Überprüfung relevanter Applikationen und Verzeichnisse
Write-Result "`nÜberprüfung relevanter Applikationen und Verzeichnisse:"
Write-Result "-------------------------------------------"
if (Test-Path "${homeDir}data_suite\venv") {
    Write-Result "Das Verzeichnis 'venv' existiert bereits."
} else {
    Write-Result "Das Verzeichnis 'venv' existiert nicht. Es muss erstellt werden."
}

if (Get-Module -ListAvailable -Name chardet) {
    Write-Result "Die 'chardet' Bibliothek ist installiert."
} else {
    Write-Result "Die 'chardet' Bibliothek ist nicht installiert. Bitte installieren."
}

$ocrDir = "${homeDir}data_suite\ocr_enricher\src"
if (Test-Path $ocrDir) {
    Write-Result "Das Verzeichnis '$ocrDir' existiert."
    if (Test-Path "$ocrDir\OCR_Enricher.ps1" -and Test-Path "$ocrDir\pdf_utils.py") {
        Write-Result "Die erforderlichen Dateien im OCR-Manager-Verzeichnis sind vorhanden."
    } else {
        Write-Result "Eine oder mehrere erforderliche Dateien im OCR-Manager-Verzeichnis fehlen."
    }
} else {
    Write-Result "Das Verzeichnis '$ocrDir' existiert nicht."
}

$submodules = @("ocr_enricher", "template_center", "text_anonymizer", "html_b2b_form")
foreach ($module in $submodules) {
    $filePath = "${homeDir}data_suite\$module\requirements.txt"
    if (Test-Path $filePath) {
        Write-Result "Die Datei 'requirements.txt' ist im Submodul '$module' vorhanden."
    } else {
        Write-Result "Die Datei 'requirements.txt' fehlt im Submodul '$module'."
    }
}

$zuluDir = "${homeDir}data_suite\zulu"
if (Test-Path $zuluDir) {
    Write-Result "Das Verzeichnis '$zuluDir' existiert."
} else {
    Write-Result "Das Verzeichnis '$zuluDir' existiert nicht. Das Zulu JDK muss installiert werden."
}

$npmDir = "${homeDir}data_suite\venv\node_modules"
if (Test-Path $npmDir) {
    Write-Result "Die npm-Abhängigkeiten sind in der virtuellen Umgebung installiert."
} else {
    Write-Result "Die npm-Abhängigkeiten sind nicht installiert. Bitte npm-Abhängigkeiten installieren."
}

# Zusätzliche Überprüfungen
Write-Result "`nZusätzliche Systemüberprüfungen:"
Write-Result "-------------------------------------------"

# Überprüfung des Windows-Betriebssystems
Write-Result "Windows-Betriebssystem:"
$osVersion = (Get-ItemProperty "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion").ProductName
Write-Result $osVersion

# Überprüfung der IntelliJ IDEA Installation
Write-Result "IntelliJ IDEA Version:"
$intelliJVersion = Get-ItemProperty "HKLM:\SOFTWARE\JetBrains\IntelliJ IDEA"
Write-Result $intelliJVersion.DisplayName

# Unternehmens-Proxy Zertifikat
Write-Result "Unternehmens-Proxy Zertifikat:"
if (Test-Path "Cert:\LocalMachine\Root\<ProxyCertThumbprint>") {
    Write-Result "Das Unternehmens-Proxy Zertifikat ist installiert."
} else {
    Write-Result "Das Unternehmens-Proxy Zertifikat fehlt."
}

# Überprüfung der SSH-Schlüssel für GitHub
Write-Result "SSH-Schlüssel für GitHub:"
if (Test-Path "$env:USERPROFILE\.ssh\id_rsa.pub") {
    Write-Result "SSH-Schlüssel ist vorhanden."
} else {
    Write-Result "SSH-Schlüssel fehlt."
}

# Überprüfung, ob SSH-Agent läuft
Write-Result "SSH-Agent Status:"
$sshAgentStatus = Get-Service -Name ssh-agent -ErrorAction SilentlyContinue
if ($sshAgentStatus.Status -eq "Running") {
    Write-Result "SSH-Agent ist gestartet."
} else {
    Write-Result "SSH-Agent läuft nicht."
}

# Überprüfung der .gitconfig-Einträge
Write-Result "Überprüfung der .gitconfig-Einträge:"
if (Test-Path "$env:USERPROFILE\.gitconfig") {
    Get-Content "$env:USERPROFILE\.gitconfig" | Out-File -FilePath $outputFile -Append
} else {
    Write-Result ".gitconfig Datei fehlt."
}

# Überprüfung der Konfigurationsdateien im .idea-Verzeichnis
Write-Result "Überprüfung der Konfigurationsdateien im .idea-Verzeichnis:"
$ideaFiles = @("misc.xml", "modules.xml", "workspace.xml")
foreach ($file in $ideaFiles) {
    if (Test-Path "${homeDir}data_suite\.idea\$file") {
        Write-Result "$file ist vorhanden."
    } else {
        Write-Result "$file fehlt."
    }
}

# Netzzugriff überprüfen
Write-Result "Überprüfung des Netzzugriffs:"
$urls = @(
    "https://www.npmjs.com",
    "https://www.azul.com/downloads/#zulu",
    "https://www.github.com",
    "https://webpack.js.org",
    "https://pypi.org/project/pdf-utils",
    "https://pypi.org/project/chardet"
)

foreach ($url in $urls) {
    try {
        $request = Invoke-WebRequest -Uri $url -UseBasicParsing
        if ($request.StatusCode -eq 200) {
            Write-Result "$url ist erreichbar."
        }
    } catch {
        Write-Result "$url ist nicht erreichbar."
    }
}

# DNS-Auflösung für GitHub überprüfen
Write-Result "Überprüfung der DNS-Auflösung für GitHub:"
try {
    [System.Net.Dns]::GetHostAddresses("www.github.com") | Out-Null
    Write-Result "DNS-Auflösung für GitHub erfolgreich."
} catch {
    Write-Result "DNS-Auflösung für GitHub fehlgeschlagen."
}
``` 
#### GIT Workflows
**Typische Anwendungsfälle und Arbeitsabläufe mit Git:**

1. **Branch erstellen und wechseln:**
```powershell
   git branch <branch_name>
   git checkout <branch_name>
```    
Alternativ in einem Schritt:
```powershell
   git checkout -b <branch_name>
```    
2. **Änderungen stagen und committen:**
```powershell
   git add <file>
   git commit -m "Commit message"
```    
3. **Änderungen pushen:**
```powershell
   git push origin <branch_name>
```    
4. **Änderungen vom Remote-Repository pullen:**
```powershell
   git pull origin main
```    
Alternativ mit Rebase:
```powershell
   git pull --rebase origin main
```    
5. **Merge-Konflikte lösen:**
   - Überprüfen der Konfliktdateien und Konflikte manuell lösen.
   - Committen der gelösten Konflikte:
```powershell
     git add <conflict_file>
     git commit -m "Konflikte gelöst"
 ```     
6. **Submodule aktualisieren:**
```powershell
   git submodule update --remote
```    
7. **Verwaltung von Submodulen:**
   **Hinzufügen von Submodulen:**
```powershell
   git submodule add <submodule_url> <path>
```    
**Entfernen von Submodulen:**
   1. Submoduleintrag aus der `.gitmodules`-Datei entfernen.
   2. Submoduleintrag aus `.git/config` entfernen:
```powershell
      git config -f .git/config --remove-section submodule.<path>
```       
   3. Submodulverzeichnis löschen und Eintrag aus dem Index entfernen:
```powershell
      git rm --cached <path>
      rm -rf <path>
 ```      
   4. Änderungen committen:
```powershell
      git commit -m "Removed submodule <name>"
```       
8. **Löschen von Dateien und Verzeichnissen:**
   **Löschen einer Datei:**
```powershell
   git rm <file>
   git commit -m "Deleted file <file>"
   git push origin <branch_name>
```    
**Löschen eines Verzeichnisses:**
```powershell
   git rm -r <directory>
   git commit -m "Deleted directory <directory>"
   git push origin <branch_name>
```    
9. **Rückgängigmachen von Änderungen:**
   **Rückgängigmachen von Änderungen in einer Datei:**
```powershell
   git checkout -- <file>
```    
**Rückgängigmachen eines Commits:**
``` 
   git revert <commit_id>
```    
10. **Anzeigen des Commit-Verlaufs:**
```powershell
    git log --oneline --graph --decorate --all
```     
11. **Überprüfung des Repository-Status:**
```powershell
    git status
 ```    
