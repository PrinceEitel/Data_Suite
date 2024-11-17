# Data_Suite
### 1. Einleitung

#### Projektbeschreibung
Das Projekt "Data_Suite" ist ein umfassendes Softwarepaket, das aus mehreren Submodulen besteht, darunter OCR_Manager_Suite, Template_Center, Text_Anonymizer und html_b2b_form. Diese Module bieten eine breite Palette von Funktionen zur Datenverarbeitung, Dokumentenanalyse und Textanonymisierung. 
Ziel des Projekts ist es, eine modulare und flexible Lösung bereitzustellen, die Unternehmen dabei unterstützt, ihre Datenverarbeitungs- und Anonymisierungsprozesse effizient zu gestalten. 
Da viele Projektkomponenten über das Internet abgerufen werden, ist die korrekte Konfiguration eines Proxys essenziell, insbesondere wenn hinter einer Unternehmens-Firewall gearbeitet wird. 
Durch die Nutzung dieser Suite können Unternehmen ihre Arbeitsabläufe automatisieren, die Datenqualität verbessern und sicherstellen, dass vertrauliche Informationen geschützt bleiben.

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
│   │   ├── activate            # Aktivierungsskript für die virtuelle Umgebung
│   │   ├── deactivate.bat      # Deaktivierungsskript für Windows
│   ├── Lib/
│   │   ├── site-packages/
│   │   │   ├── chardet/        # Python-Bibliothek "chardet"
│   │   │   ├── numpy/          # Beispiel für eine Python-Bibliothek
│   │   │   └── ...
│   └── pyvenv.cfg              # Konfigurationsdatei für die virtuelle Umgebung
├── ocr_enricher/               # Submodul für OCR-Manager
│   ├── .git/                   # Git-Verzeichnis für das Submodul
│   ├── logs/
│   │   ├── error_log.txt       # Fehler-Logdatei
│   │   ├── result_log.txt      # Ergebnis-Logdatei
│   ├── src/
│   │   ├── OCR_Enricher.ps1    # Benötigt ocrmypdf Installation
│   │   ├── pdf_utils.py        # Verwendet PyPDF2
│   ├── requirements.txt        # Abhängigkeiten für OCR_Enricher
│   └── ...
├── template_center/            # Submodul für Template Center
│   ├── .git/                   # Git-Verzeichnis für das Submodul
│   ├── __init__.py             # Initialisierungsdatei für Python-Paket
│   ├── template_handler.py     # Skript zur Verwaltung von Templates
│   ├── requirements.txt        # Python-Abhängigkeiten für Template_Center
│   └── ...
├── text_anonymizer/            # Submodul für Text-Anonymisierung
│   ├── .git/                   # Git-Verzeichnis für das Submodul
│   ├── __init__.py             # Initialisierungsdatei für Python-Paket
│   ├── anonymizer/
│   │   ├── __init__.py         # Initialisierungsdatei für das anonymizer-Paket
│   │   ├── cli.py              # Kommandozeilenschnittstelle für den Anonymizer
│   │   ├── config.py           # Konfigurationsdateien für den Anonymizer
│   │   ├── loader.py           # Loader-Modul für die Anonymisierung
│   │   ├── processor.py        # Hauptprozessor für die Text-Anonymisierung
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
 Movie_Stream_Library/       # Submodul für Verwaltung digitaler Filmsammlungen diverser Quellen (iTunes, Amazon Prime,..).
│   ├── movie_library/      # 
│   │   ├── .git/                   # Git-Verzeichnis für das Submodul Movie_Stream_Library
│   │   ├── __init__.py             # Initialisierungsdatei fürs Movie_Stream_Library-Paket
│   │   ├── movie_manager.py
│   │   └── tests/
│   │       ├── __init__.py
│   │       └── test_movie_manager.py
│   │   ├── venv/                   # Virtuelle Umgebung für Python
│   │   │   ├── Scripts/
│   │   │   │   ├── activate/       # Aktivierungsskript für die virtuelle Umgebung
│   │   │   │   ├── deactivate.bat  # Deaktivierungsskript für Windows
│   │   │   │   └── ...
│   │   ├── ........
│   │   ├── ........           
│   │   ├── Movie_Stream_Library.log # Movie_Stream_Library Log 
│   │   └── ...
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

- **venv/**: Enthält virtuelle Umgebung fürs gesamte Projekt, wodurch Python-Abhängigkeiten isoliert und verwaltet werden ([venv](#virtual-environment)).
- **ocr_enricher/**, **template_center/**, **text_anonymizer/**, **html_b2b_form/**: Jedes dieser Verzeichnisse repräsentiert ein Submodul, enthält ein eigenes `.git`-Verzeichnis und eine eigene `requirements.txt`, um spezifische Abhängigkeiten zu verwalten ([Submodule](#submodule))
- **.git/**: Git-Verzeichnis des Hauptprojekts.
- **.idea/**: Konfigurationsdateien für IntelliJ IDEA, die projektübergreifende Einstellungen speichern.
- **README.md**: Beschreibung des des jeweiligen Projekts.
- **requirements.txt**: Liste der Python-Abhängigkeiten für das Hauptprojekt.
- **package.json**: Liste der npm-Abhängigkeiten für das Hauptprojekt.
- **node_modules/**: Enthält installierte npm-Bibliotheken.
- **zulu/**: Verzeichnis fürs Zulu JDK, das als Java SDK verwendet wird ([zulu](#zulu-jdk))
 
### 2. Systemvoraussetzungen

#### Software
1. **Windows-Betriebssystem:**
   - **Edition:** Windows 10 Enterprise Version 22H2
2. **Git for Windows:**
   - **Path:** C:\Program Files\Git\cmd
3. **IntelliJ IDEA:**
   - **Edition:** Ultimate 2024.1
5. **Python virtuelle Umgebungen:**
   - Details im Abschnitt 6 Step 4 ["Virtuelle Umgebung einrichten"](#venv-setup)
   - zur Isolation und Verwaltung von Python-Abhängigkeiten innerhalb des Projekts.

#### Komponenten und Berechtigungen
1. **Lokale Administratorrechte:** zur Installation lokaler Software und die Konfiguration des lokalen Systems.

2. **GitHub-Repositories ([github_user], privater Account):**
   - **Main:** https://github.com/[github_user]/Data_Suite (alias data_suite) - Sichtbarkeit: Public
   - **Submodule:**
     - OCR_Manager_Suite: https://github.com/[github_user]/OCR_Manager_Suite - Sichtbarkeit: Public
     - Template_Center: https://github.com/[github_user]/Template_Center - Sichtbarkeit: Private
     - Text_Anonymizer: https://github.com/[github_user]/Text_Anonymizer - Sichtbarkeit: Private
     - html_b2b_form: https://github.com/[github_user]/html_b2b_form - Sichtbarkeit: Private
   - **Links:**
     - [git-repository](#git-repository).
     - [Submodule](#submodule)
     - [branch](#branch)
    
       
#### Netzwerk- und Ausführungsrechte

1. **Netzwerk- und Ausführungsrechte zum unregelmässigen und regelmässigen Austausch:**
   - **Netzwerkzugriff:** Sicherstellen, dass keine Netzwerkrestriktionen den Zugriff auf GitHub und andere benötigte Ressourcen blockieren. 
     - https://www.jetbrains.com/idea/download/ => JetBrains-Website für IntelliJ IDEA Ultimate
     - www.npmjs.com => node.js (JavaScript package manager)  
     - www.azul.com/downloads/#zulu => Azul Zulu JDK (certified build of OpenJDK)
     - www.github.com => GitHub (für Download und Sync der Repositorys muss Zugriff auf GitHub gewährleistet sein)
     - https://webpack.js.org => webpack.js (extensible and configurable static module bundler for JavaScript applications)
     - https://pypi.org/project/pdf-utils => pdf_utils.py (verwendet PyPDF2)
     - https://pypi.org/project/chardet   => Chardet (Universal Character Encoding Detector)

**Quellen:**
- [Setting Up Git Behind a Proxy](https://stackoverflow.com/questions/783811/getting-git-to-work-with-a-proxy-server-fails-with-request-timed-out)
- [Cloning GitHub Repository Behind Corporate Proxy](https://stackoverflow.com/questions/34988038/git-clone-behind-corporate-proxy)

## 3. Installation und Basiskonfigurationen

### 3.1 Git-Installation und Konfiguration

1. **Installation von Git for Windows:**
- **Git for Windows herunterlade:**  kann von der offiziellen Git-Website [git-scm.com](https://git-scm.com) heruntergeladen werden.
- **Standardeinstellungen:** Installiere Git mit den Standardeinstellungen.

2. **Überprüfung der Git-Installation:**
   ```console
   git --version
   
   #Beispielausgabe: `git version 2.x.x`.
   ```


3. **Konfiguration von Git:**
- **Konfiguriere den [windows_user]:**
   ```console
   git config --global user.name "[github_user]"
   ```
- **Konfiguriere  die E-Mail-Adresse:**   
   ```console
   git config --global user.email "[github_user_mail_address]"
   ```
- **Überprüfe die Konfiguration:**     
   ```console
   git config --global --list
   ```
   
4. **Proxy-Einstellungen für Git (falls erforderlich):**
   ```console
   git config --global http.proxy http://username:password@proxy-server:port
   git config --global https.proxy https://username:password@proxy-server:port
   ```
5. **Überprüfung der Proxy-Konfiguration und Erreichbarkeit von GitHub:**
- **GitHub Verbindung via proxy mit `curl` testen:**      
   ```console
   curl -x http://<proxy-server>:<port> -I https://github.com

   #sendet HTTP-Anfrage an GitHub über konfigurierten Proxy. erfolgreiche Antwort zeigt, dass Proxy-Konfiguration korrekt und GitHub erreichbar ist.
   #`curl` berücksichtigt die Proxy-Einstellungen und simuliert tatsächliche Kommunikation, wie auch bei der Verwendung von Git oder IntelliJ.
   #`nslookup` und `Test-NetConnection` könnten Eindruck erwecken, dass GitHub erreichbar ist, obwohl durch Proxy blockiert werden könnte, was `curl` vermeidet
   ```
### 3.2 IntelliJ IDEA Installation

1. **Download und Installation von IntelliJ IDEA Ultimate:**
- **IntelliJ IDEA Ultimate herunterladen:** kann von der JetBrains-Website [jetbrains.com/idea/download](https://www.jetbrains.com/idea/download) heruntergeladen werden.

### 3.3 SSH-Schlüssel erstellen und konfigurieren

1. **Erstellung eines neuen SSH-Schlüssels:**
   ```console
   ssh-keygen -t rsa -b 4096 -C "email@example.com"
   #Standardspeicherort (`C:\Users\[windows_user]\.ssh\id_rsa`) durch Drücken von Enter akzeptieren. Optional kann Passwort festgelegt werden.
   #[ssh-shell](#ssh-secure-shell)
   ```
2. **Starten des SSH-Agents und Hinzufügen des Schlüssels:**
   ```console
   Start-Service ssh-agent
   #[Info ssh-agent](#ssh-agent)
   ```
   
   ```console
   #Hinzufügen des privaten Schlüssels zum Agenten:   
   ssh-add ~/.ssh/id_rsa
   ```

3. **Kopieren des öffentlichen Schlüssels:**
   ```console
   Get-Content ~/.ssh/id_rsa.pub | Set-Clipboard
   ```

4. **Hinzufügen des SSH-Schlüssels zu GitHub:**
  - **Anmelden bei GitHub:** dann zu **Settings** -> **SSH and GPG keys** -> **New SSH key** navigieren.
  - **Kopie des Schlüssels einfügen und speichern**  

6. **Überprüfung der SSH-Verbindung zu GitHub:**
   ```console
   #Verbindung zu GitHub kann mit folgendem Befehl getestet werden:      
   ssh -T git@github.com
   ```

### 3.4 **CA-Zertifikate hinzufügen:**
  - **lokale Zertifikatsverwaltung import sicherstellen**

### 4. GIT Setup Main

#### 4.1 Erstellen des Hauptprojekts aus GitHub

**Schritte zur Erstellung des GitHub-Repositorys für `Data_Suite`:**

1. **Erstellen des GitHub-Repositorys:**
   - Auf [GitHub](https://github.com) mit dem privaten Account ([github_user]) anmelden.
   - Das Plus-Symbol (+) in der oberen rechten Ecke anklicken und "New repository" wählen.
   - Den Namen `Data_Suite` eingeben.
   - Die gewünschte Sichtbarkeit (Public oder Private) auswählen.
   - Auf "Create repository" klicken, um das Repository zu erstellen.
   - [git-repository](#git-repository).

2. **Initialisierung des lokalen Git-Repositorys:**
   - Die Eingabeaufforderung (Cmd) oder PowerShell öffnen.
   - Zum gewünschten Verzeichnis navigieren, in dem das Projekt erstellt werden soll:
   ```console
   cd `C:\Users\[windows_user]\git\data_suite`
   ```
   - Ein neues Git-Repository im aktuellen Verzeichnis initialisieren:
   ```console
   git init
   ```

3. **Hauptbranch umbenennen und Änderungen pushen:**
   - Den Hauptbranch in `main` umbenennen, um dem gängigen Standard zu folgen:
   ```console
   git branch -M main
   ```
   - Änderungen zum Remote-Repository pushen, um das lokale Repository mit dem Remote-Repository zu verbinden:
   ```console
   git push -u origin main
   ```

4. **Verbindung zum Remote-Repository herstellen:**
   - Das Remote-Repository hinzufügen, um das lokale Repository mit GitHub zu verbinden:
   ```console
   git remote add origin https://github.com/[github_user]/Data_Suite.git
   ```
   - Die Verbindung zum Remote-Repository überprüfen, um sicherzustellen, dass die URLs für `fetch` und `push` korrekt sind:
   ```console
   git remote -v
   ```
   - Die Ausgabe sollte die URLs für `fetch` und `push` anzeigen, die mit dem GitHub-Repository verbunden sind.

5. **Überprüfung der Verzeichnisse und bestehenden Git-Repositories:**
   - Überprüfen, ob das `data_suite`-Verzeichnis bereits existiert:
   ```powershell
   if (Test-Path `C:\Users\[windows_user]\git\data_suite`) {
       Write-Host "Verzeichnis existiert bereits. Bitte ein anderes Verzeichnis wählen oder das bestehende löschen."
   } else {
       Write-Host "Verzeichnis existiert nicht. Fortfahren mit Erstellung."
   }
   ```
   - Sicherstellen, dass keine bestehenden Git-Repositories im Zielverzeichnis vorhanden sind:
   ```powershell
   if (Test-Path `C:\Users\[windows_user]\git\data_suite\.git`) {
       Write-Host "Ein Git-Repository existiert bereits in diesem Verzeichnis. Bitte löschen oder ein anderes Verzeichnis wählen."
   } else {
       Write-Host "Kein Git-Repository gefunden. Fortfahren mit Erstellung."
   }
   ```
   
### 5. GIT Setup Submodule

#### 5.1 Beschreibung der Konfigurationsdateien

- **.gitconfig Einstellungen für den Unternehmens-Account VX:**
    - Die `.gitconfig`-Datei enthält die benutzerspezifischen Konfigurationen für Git. Für den Unternehmens-Account VX wird sie folgendermaßen eingerichtet:

    ```plaintext
    [filter "lfs"]
        clean = git-lfs clean -- %f        # Bereinigt Dateien vor dem Commit, um große Dateien durch LFS-Pointer zu ersetzen
        smudge = git-lfs smudge -- %f      # Stellt die Originaldateien aus LFS wieder her
        process = git-lfs filter-process   # Führt den LFS-Filterprozess aus
        required = true                    # LFS ist für dieses Repository erforderlich

    [user]
        name = [github_user]                # Name des Benutzers für Commits
        email = [github_user_mail_address]  # E-Mail-Adresse des Benutzers für Commits

    [safe]
        directory = C:\Users\[windows_user]\git\data_suite\text_anonymizer     # Sichere Verzeichnisse für Git-Operationen
        directory = C:\Users\[windows_user]\git\data_suite\template_center
        directory = C:\Users\[windows_user]\git\data_suite\OCR_Enricher
        directory = C:\Users\[windows_user]\git\data_suite\html_b2b_form

    [core]
        autocrlf = true                     # Konvertiert Zeilenenden automatisch (Windows <-> Unix)

    [merge]
        tool = meld                        # Merge-Tool für Konfliktlösungen

    [rerere]
        enabled = true                      # Aktiviert die Wiederverwendung aufgezeichneter Konfliktlösungen
    ```

    **Erklärungen:**

    - `[filter "lfs"]`: Einstellungen für Git Large File Storage (LFS), um große Dateien effizient zu verwalten.
    - `[user]`: [windows_user] und E-Mail-Adresse für Git-Commits.
    - `[safe]`: Sichere Verzeichnisse, in denen Git-Befehle ausgeführt werden dürfen.
    - `[core]`: Core-Einstellungen wie `autocrlf`, das sicherstellt, dass Zeilenendungen korrekt zwischen Windows und Unix-Systemen umgewandelt werden.
    - `[merge]`: Merge-Tool, das für Konfliktlösungen verwendet wird (hier: `meld`).
    - `[rerere]`: Aktiviert die Wiederverwendung von aufgezeichneten Lösungen für Merge-Konflikte.

#### 5.2 Zugriffsrechte konfigurieren

- **Einladen des [github_user] -Accounts zu den privaten Repositories:**

    `1`. Navigiere zu den Repository-Einstellungen der privaten Repositories (z.B. `OCR_Manager_Suite`, `Template_Center`, `Text_Anonymizer` und `html_b2b_form`).
    `2`. Gehe zu `Settings -> Manage access`.
    `3`. Klicke auf `Invite a collaborator` und gebe den [github_user_mail_address]-Account (z.B. `vx@company.com`) ein.
    `4`. Weise den entsprechenden Zugriff zu (z.B. `Write` oder `Admin`).

#### 5.3 Vorab-Check der GIT Konfigurationen (Submodule-Ebene)

- **Überprüfung der GIT-Installation und Konfiguration:**

    `1`. Git Installation überprüfen:

    ```powershell
    git --version
    ```

    `2`. Git-Konfiguration überprüfen oder erstelle automatisch eine neue `.gitconfig` mit den Konfigurationsbefehlen:

    ```powershell
   git config --global user.name "[github_user]"
   git config --global user.email "[github_user_mail_address]"
    ```
    
    `3`. Git-Konfiguration überprüfen um sicherzustellen, dass die Benutzerkonfiguration korrekt gespeichert wurde:

    ```powershell
  git config --list
    ```
    

#### 5.4 Submodule hinzufügen und konfigurieren

- **Hinzufügen der Submodule:**

    ```powershell
   git submodule add https://github.com/github_user/OCR_Manager_Suite.git ocr_enricher
   git submodule add https://github.com/github_user/Template_Center.git template_center
   git submodule add https://github.com/github_user/Text_Anonymizer.git text_anonymizer
   git submodule add https://github.com/github_user/html_b2b_form.git html_b2b_form    
   git submodule init          # Initialisiert die Submodule (darf auch später hinzugefügt werden, da ein bereits initialisiertes Submodul ignoriert wird
   git submodule update        # Aktualisiert die Submodule auf den neuesten Stand
    ```

- **Stagen und committen der Submodule:**

    ```powershell
    git add .gitmodules ocr_enricher template_center text_anonymizer html_b2b_form
    git commit -m "Submodule OCR_Manager_Suite, Template_Center, Text_Anonymizer und html_b2b_form hinzugefügt"
    git push origin main        # Änderungen ins Remote-Repository übertragen
    ``` 
---
#### 5.5 Synchronisieren des Hauptmoduls und der Submodule

##### Automatischer Sync aller Module
1. **Ziehe die neuesten Änderungen für das Hauptmodul:**
   ```powershell
   git pull
   ```
2. **Submodule aktualisieren:**
   ```powershell
   git submodule update --init --recursive
   ```
3. **Optional: Pull für jedes Submodul ausführen:**
   ```powershell
   git submodule foreach git pull origin main
   
### 6. IntelliJ Setup

#### 6.1 Vorab-Checks

Zwei Möglichkeiten stehen zur Verfügung, um die Installation und Konfiguration von IntelliJ IDEA zu überprüfen:

- **Automatisierte Überprüfung:** Ein Skript führt eine schnelle und automatisierte Systemüberprüfung durch, ideal für regelmäßige oder wiederholte Setups.
  
- **Manuelle Überprüfung:** Eine detaillierte, manuelle Kontrolle einzelner Komponenten, besonders nützlich, wenn spezifische Probleme vermutet werden oder das Projekt erstmalig eingerichtet wird.

**Empfehlung:** Die manuelle Überprüfung ist bei der erstmaligen Einrichtung oder bei Problemen zu bevorzugen. Für wiederholte Installationen ist das automatisierte Skript effizienter.

##### 6.1.1 Automatisierte Überprüfung mit Skript

1. **Skript zur Überprüfung der Installation und Konfiguration ausführen:**
   - Das entsprechende Skript befindet sich im Anhang als ["IntelliJ System-Check Powershell Script"](#intellij-checkup).
   - Vor der Ausführung muss das Skript signiert werden (siehe ["Signieren von PowerShell-Skripten im IntelliJ Terminal"](#script-sign-setup)).
   - Ausführung des Skripts im Terminal (PowerShell) oder direkt unter Windows:
     ```powershell
     .\intelliJ_system_check.ps1 -homeDir "C:\Users\[windows_user]\"
     ```

##### 6.1.2 Manuelle Überprüfung

1. **Installation überprüfen:**
   - Unter `Help` -> `About` kann sichergestellt werden, dass `IntelliJ IDEA Ultimate 2024.1` installiert ist.

2. **Plugins überprüfen:**
   - Unter `File` -> `Settings` -> `Plugins` prüfen, ob die erforderlichen Plugins (`Python`, `Git`, etc.) installiert und aktiviert sind.

3. **Konfigurationsdateien prüfen:**
   - Sicherstellen, dass die Konfigurationsdateien im `.idea`-Verzeichnis vorhanden und korrekt sind (`misc.xml`, `modules.xml`, `compiler.xml`, `workspace.xml`, `vcs.xml`).

#### 6.2 IntelliJ Terminal konfigurieren

Um das Terminal in IntelliJ IDEA optimal zu nutzen, sind folgende Schritte erforderlich:

1. **Einstellungen öffnen:**
   - `File` -> `Settings` (oder `Ctrl+Alt+S`).

2. **Terminal konfigurieren:**
   - `Tools` -> `Terminal`.

3. **Shell Path festlegen:**
   - **Für PowerShell 7 (empfohlen):**
     ```console
     Shell Path: C:\Program Files\PowerShell\7\pwsh.exe
     Shell Options: -NoLogo
     ```
   - **Für die Eingabeaufforderung (cmd):**
     ```console
     Shell Path: C:\Windows\System32\cmd.exe
     Shell Options: /K
     ```

4. **Konfiguration testen:**
   - Das Terminal innerhalb von IntelliJ IDEA unter `View` -> `Tool Windows` -> `Terminal` öffnen und überprüfen, ob die Einstellungen korrekt übernommen wurden. Es sollte sichergestellt werden, dass PowerShell 7 verwendet wird.

<a name="script-sign-setup"></a>
### 6.3 Signieren von PowerShell-Skripten im IntelliJ Terminal

In gut gesicherten Unternehmensumgebungen ist es oft erforderlich, dass PowerShell-Skripte signiert werden, um ihre Integrität und Authentizität sicherzustellen. Eine digitale Signatur bestätigt, dass das Skript seit der Signierung nicht verändert wurde. **Jedes Mal, wenn ein Skript bearbeitet wird, ändert sich sein Hash-Wert, wodurch die ursprüngliche Signatur ungültig wird.** Daher muss das Skript nach jeder Änderung erneut signiert werden, um es weiterhin ausführen zu können. Dieser Abschnitt erläutert sowohl den Prozess der Erst-Signatur als auch die notwendige Aktualisierung der Signatur nach Codeänderungen ([Signieren](#signate-scripts)) 

#### 6.3.1 PowerShell 7 (Empfohlen)

Dieser Abschnitt führt Schritt für Schritt durch den Prozess des Signierens von PowerShell-Skripten im IntelliJ Terminal. Dabei wird unterschieden zwischen:

- **Erst-Signatur des Skripts:** Hier müssen alle Schritte durchgeführt werden, um das Zertifikat zu erstellen und das Skript zu signieren.
- **Update-Signatur nach einer Skriptänderung:** Hier sind nur die Schritte zur Signatur selbst erforderlich, da das Zertifikat bereits besteht.

##### 6.3.1.1 Erstellen eines selbstsignierten Zertifikats (Erst-Signatur)

Zuerst wird ein selbstsigniertes Zertifikat erstellt, das für die Signierung der Skripte verwendet wird.

```powershell
$cert = New-SelfSignedCertificate -CertStoreLocation Cert:\CurrentUser\My -Subject "CN=MyScriptSigningCert" -KeyUsage DigitalSignature -Type CodeSigningCert
```

##### 6.3.1.2 Exportieren des Zertifikats (Erst-Signatur)

Das erstellte Zertifikat muss nun exportiert werden, um es in den vertrauenswürdigen Zertifikatspeicher des Systems zu importieren.

```powershell
Export-Certificate -Cert $cert -FilePath "C:\Users\<Dein[windows_user]>\MyScriptSigningCert.cer"
```

##### 6.3.1.3 Importieren des Zertifikats in vertrauenswürdige Speicher (Erst-Signatur)

Damit das Zertifikat vom System als vertrauenswürdig anerkannt wird, muss es in die entsprechenden Zertifikatspeicher importiert werden.

```powershell
Import-Certificate -FilePath "C:\Users\[windows_user]\cert\MyScriptSigningCert.cer" -CertStoreLocation Cert:\LocalMachine\Root
Import-Certificate -FilePath "C:\Users\[windows_user]\cert\MyScriptSigningCert.cer" -CertStoreLocation Cert:\LocalMachine\TrustedPublisher
```

##### 6.3.1.4 Ermitteln des Thumbprints (Erst-Signatur & Update-Signatur)

Der Thumbprint des Zertifikats wird benötigt, um das Skript signieren zu können. Dieser Schritt stellt sicher, dass das richtige Zertifikat verwendet wird.

```powershell
$thumbprint = (Get-ChildItem -Path Cert:\CurrentUser\My | Where-Object {$_.Subject -eq "CN=MyScriptSigningCert"} | Select-Object -ExpandProperty Thumbprint).Trim()
```

##### 6.3.1.5 Signieren des Skripts (Erst-Signatur & Update-Signatur)

Nachdem das Zertifikat eingerichtet ist, kann das Skript signiert werden. **Dieser Schritt muss nach jeder Änderung am Skript wiederholt werden.**

```powershell
Set-AuthenticodeSignature -FilePath ""C:\Users\[windows_user]\intelliJ_system_check.ps1" -Certificate (Get-Item -Path Cert:\CurrentUser\My\$thumbprint)
```

##### 6.3.1.6 Ausführungsrichtlinie setzen (optional) (Erst-Signatur & Update-Signatur)

Für die Ausführung signierter Skripte kann die Ausführungsrichtlinie auf `RemoteSigned` gesetzt werden, um sicherzustellen, dass nur vertrauenswürdige Skripte ausgeführt werden dürfen.

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

#### 6.3.2 Regelmäßige Aktualisierung der Signatur

**Wichtiger Hinweis:** **Nach jeder Änderung am Skript muss die Signatur aktualisiert werden**, da die Änderung den Hash-Wert des Skripts verändert und die ursprüngliche Signatur ungültig macht. Führen Sie dazu die Schritte **6.3.1.4 bis 6.3.1.6** erneut aus, um sicherzustellen, dass das Skript weiterhin den Sicherheitsrichtlinien entspricht und ausgeführt werden kann.

<a name="venv-setup"></a>
#### 6.4 Virtuelle Umgebung einrichten

Zum Einrichten einer Python-Umgebung und zur Verwaltung von Abhängigkeiten (siehe [venv](#virtual-environment) via [pip Installation](#pip-install)):

1. **Terminal öffnen:**
   - Terminal in IntelliJ IDEA unter `View` -> `Tool Windows` -> `Terminal` öffnen.

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

**Erweiterte Schritte:**

- **Installierte Pakete überprüfen:**
   ```powershell
   pip list
   ```

- **Weitere Pakete hinzufügen:**
   ```powershell
   pip install <package-name>
   ```

- **Kompatibilität sicherstellen:**
   - Überprüfen, ob alle notwendigen Pakete und deren Versionen korrekt installiert sind.

**Installation und Verwaltung von npm-Abhängigkeiten in einer zentralen virtuellen Umgebung:**

- **Virtuelle Umgebung erstellen:**
   ```console
   cd `C:\Users\[windows_user]\git\data_suite`
   mkdir venv
   ```

- **Initiale Installation der Abhängigkeiten:**
   ```console
   npm install --prefix ./venv
   ```

- **Neue Abhängigkeiten hinzufügen:**
   ```console
   npm install <paketname> --prefix ./venv --save
   ```

- **Entwicklungsabhängigkeiten hinzufügen:**
   ```console
   npm install <paketname> --prefix ./venv --save-dev
   ```

- **Abhängigkeiten aktualisieren:**
   ```console
   npm update --prefix ./venv
   ```

- **Installierte Abhängigkeiten überprüfen:**
   ```console
   npm list --prefix ./venv
   ```

#### 6.5 Zulu JDK und andere notwendige Komponenten

Zur Installation und Konfiguration des Zulu JDK und weiterer Bibliotheken:

1. **Zulu JDK installieren:**
   - Das Zulu JDK von der offiziellen Webseite herunterladen und installieren.

2. **In IntelliJ konfigurieren:**
   - `File` -> `Project Structure` -> `Project Settings` -> `Project`.
   - Das Zulu JDK als SDK auswählen und den Pfad überprüfen.

3. **Installation überprüfen:**
   - Sicherstellen, dass das Zulu JDK korrekt installiert ist und keine Fehlermeldungen auftreten.

**Installation von `chardet` und anderen Bibliotheken:**

- **Bibliothek in der virtuellen Umgebung installieren:**
   ```powershell
   pip install chardet
   ```

- **Installation überprüfen:**
   ```powershell
   pip show chardet
   ```

#### 6.6 Projekt importieren

Zum Importieren des Projekts `Data_Suite` in IntelliJ IDEA:

1. **Projekt importieren:**
   - IntelliJ IDEA öffnen und zu `File` -> `New` -> `Project from Existing Sources...` navigieren.
   - Das Verzeichnis `C:\Users\[windows_user]\git\data_suite` auswählen und den Anweisungen folgen.

2. **Submodule konfigurieren:**
   - `File` -> `Settings` -> `Version Control` -> `Git`.
   - Sicherstellen, dass alle Submodule korrekt erkannt und konfiguriert sind.

#### 6.7 Python Interpreter konfigurieren

Zur Konfiguration des Python Interpreters:

1. **Einstellungen öffnen:**
   - `File` -> `Settings` -> `Project: <Projektname>` -> `Python Interpreter`.

2. **Interpreter hinzufügen:**
   - Auf das Zahnrad-Symbol klicken und `Add...` auswählen.
   - `Existing environment` wählen und zum Python-Interpreter in der virtuellen Umgebung navigieren (`C:\Users\[windows_user]\git\data_suite\venv\Scripts\python.exe`).

#### 6.8 Quellverzeichnisse konfigurieren

Um relevante Verzeichnisse als Quellverzeichnisse zu markieren ([Verzeichnismarkieung](#folder-marks)):

1. **Projektstruktur öffnen:**
   - `File` -> `Project Structure`.

2. **Verzeichnisse markieren:**
   - Rechtsklick auf das Verzeichnis im Projektfenster -> `Mark Directory as` -> `Sources Root`.

#### 6.9 GIT-Integration im IntelliJ konfigurieren

Zur Überprüfung und Konfiguration der Git-Integration in IntelliJ IDEA:

1. **Einstellungen öffnen:**
   - `File` -> `Settings` -> `Version Control` -> `Git`.

2. **Pfad zur Git-Installation überprüfen:**
   - Sicherstellen, dass der Pfad zur Git-Installation korrekt gesetzt ist (z.B., `C:\Program Files\Git\cmd\git.exe`).

3. **Git-Integration aktivieren:**
   - Überprüfen, ob die Git-Integration aktiviert ist und das Hauptprojekt sowie alle Submodule erkannt werden.

4. **Repository-Status überprüfen:**
   - Das Terminal in IntelliJ IDEA öffnen und folgende Befehle ausführen:
   ```powershell
   git pull
   git submodule init
   git submodule update
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
  - **Virtuelle Umgebung ([venv](#virtual-environment))**: Enthält die Python-Umgebung und installierten Pakete

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
      -  [jinja2](#jinja2)
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
    - Strukturiere neue Module ähnlich den bestehenden (`src/new_module/`).
    - Erstelle Hauptdateien und Unterverzeichnisse entsprechend den Anforderungen.
  - **Erweiterung bestehender Module:**
    - Füge neue Funktionen in den Hauptdateien hinzu.
    - Nutze bestehende Hilfsfunktionen und -klassen.
  - **Integration neuer Bibliotheken:**
    - Füge neue Abhängigkeiten in die `requirements.txt` ein.
    - Installiere die neuen Pakete in der virtuellen Umgebung:
```python
      pip install -r requirements.txt
```       
- **Erweiterung der Tests:**
    - Erstellen neuer Testdateien für neue Module oder Funktionen.
    - vorhandene Testmuster und -strukturen nutzen.

### 8. Integration zentraler Konfigurationsdateien

**Übersicht:**
Die Verwendung zentraler Konfigurationsdateien im `.idea`-Verzeichnis von IntelliJ IDEA kann den Aufwand für die Einrichtung einer konsistenten Entwicklungsumgebung erheblich reduzieren. Durch die Bereitstellung und Nutzung zentraler Konfigurations-Templates, die spezifisch auf die Anforderungen des Projekts oder der Zielsysteme abgestimmt sind, lässt sich sicherstellen, dass alle notwendigen Einstellungen einheitlich und korrekt angewendet werden, ohne auf die GUI der IDE angewiesen zu sein.

#### Wichtige Konfigurationsdateien im `.idea`-Verzeichnis:
- **misc.xml:** Speichert allgemeine Projekteinstellungen, einschließlich des verwendeten JDK, des Projektverzeichnisses und des Ausgabeortes für den Compiler.
- **modules.xml:** Enthält Informationen über die Module des Projekts, ihre Pfade und zugehörige Konfigurationsdateien.
- **compiler.xml:** Konfiguriert die Compiler-Einstellungen, einschließlich der Auswahl des Compilers und der Ausgabeverzeichnisse.
- **workspace.xml:** Speichert benutzerspezifische Einstellungen wie Fensteranordnung, Editor-Tabs und laufende Aufgaben.
- **vcs.xml:** Enthält die Versionskontrollsystem-Einstellungen, wie z. B. die Konfiguration der Git-Integration.

Weitere Details zu diesen Konfigurationsdateien und deren Inhalt finden sich im Glossar unter [`.idea`-Konfigurationsdateien](#glossar).

#### Vorgehensweise zur Einbindung zentraler Konfigurationsdateien:
1. **Vorbereitung von Konfigurations-Templates:**
   - Zentrale Konfigurations-Templates erstellen, die auf die spezifischen Anforderungen der Zielsysteme abgestimmt sind (z. B. `modules_win_data_suite_client.xml`).
   - Diese Templates in einem zentralen Repository oder Verzeichnis bereitstellen, auf das alle Entwickler zugreifen können.

2. **Initialisierung neuer Projekte:**
   - Bei der Initialisierung eines neuen Projekts oder beim Hinzufügen neuer Module die vorbereiteten Konfigurations-Templates verwenden, um eine fehlerfreie und einheitliche Einrichtung zu gewährleisten.
   - Die relevanten Dateien aus dem Templates-Verzeichnis in das `.idea`-Verzeichnis des Projekts kopieren.

3. **Automatisierte Validierung:**
   - Skripte oder CI/CD-Pipelines verwenden, um die Integrität und Konsistenz der `.idea`-Dateien regelmäßig zu überprüfen. Diese Validierungen stellen sicher, dass die Konfigurationen nicht manuell verändert wurden und alle erforderlichen Einstellungen enthalten sind.

4. **Anpassung an spezielle Anforderungen:**
   - Falls spezifische Anpassungen erforderlich sind, sollten diese sorgfältig dokumentiert und in den entsprechenden Templates hinterlegt werden, um sicherzustellen, dass alle Projekte von den gleichen Basis-Einstellungen ausgehen.

### Anpassung und Erweiterung der `.idea`-Konfigurationsdateien

**Erweiterte Konfigurationsmöglichkeiten in `compiler.xml`:**
- Um zusätzliche Compiler oder spezifische Einstellungen direkt in der `compiler.xml`-Datei zu konfigurieren, kann die Datei manuell editiert werden. Hier ist ein erweitertes Beispiel, das die Konfiguration eines alternativen Compilers zeigt:

```xml
<component name="CompilerConfiguration">
  <option name="DEFAULT_COMPILER" value="Javac" />
  <option name="COMPILER_PROCESS_HEAP_SIZE" value="2048" />
  <resourceExtensions />
  <wildcardResourcePatterns>
    <entry name="!?*.java" />
    <entry name="!?*.kt" /> <!-- Kotlin Compiler als Beispiel -->
  </wildcardResourcePatterns>
  <annotationProcessing enabled="true">
    <profile default="true" name="Default" enabled="true">
      <processor path="" />
    </profile>
  </annotationProcessing>
</component>
```

- **Neue Compiler hinzufügen:**
  - Alternative Compiler können durch spezifische Einträge in der `compiler.xml`-Datei definiert werden. Um die genaue Syntax und mögliche Einstellungen herauszufinden, empfiehlt sich die Konsultation der IntelliJ IDEA-Dokumentation oder das Verwenden der GUI für die initiale Konfiguration, um anschließend die resultierende Datei zu inspizieren.

**Terminal-Einstellungen in der `workspace.xml`:**
- Die Konfiguration des Terminals in IntelliJ IDEA kann ebenfalls über die `workspace.xml`-Datei vorgenommen werden. Es ist möglich, hier Pfade zu verschiedenen Shells und andere terminalbezogene Einstellungen direkt zu definieren.

Beispiel für eine Terminal-Konfiguration in `workspace.xml`:
```xml
<component name="TerminalProjectOptionsProvider">
  <option name="shellPath" value="C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe" />
  <option name="tabName" value="PowerShell" />
  <option name="shellArguments" value="-ExecutionPolicy Bypass" />
</component>
<component name="TerminalOptionsProvider">
  <option name="defaultShellPath" value="C:\Windows\System32\cmd.exe" />
</component>
```

- **Anpassung der Shell-Pfade:**
  - Pfade im `shellPath`-Tag können geändert werden, um andere Shells wie Git Bash oder CMD zu verwenden. 	 

### 9. Fehlerbehebung und Support

#### 9.1 Häufige Probleme und Lösungen

##### 9.1.1 Probleme bei der Nutzung von Git

1. **Fehler beim Klonen eines Repositories: `Permission denied (publickey)`**
   - **Ursache:** Der SSH-Schlüssel ist nicht korrekt eingerichtet oder GitHub akzeptiert den verwendeten Schlüssel nicht.
   - **Lösung:** 
     - Überprüfen, ob der SSH-Schlüssel generiert und dem GitHub-Account hinzugefügt wurde:
       ```console
       ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
       cat ~/.ssh/id_rsa.pub
       ```
    - Befehl `ssh-keygen` generiert einen neuen SSH-Schlüssel. Der Befehl `cat` zeigt den öffentlichen Schlüssel an, der zu GitHub hinzugefügt werden muss.
      
     - Öffentlichen Schlüssel zu GitHub hinzufügen unter [SSH Keys](https://github.com/settings/keys).
     - SSH-Verbindung testen:
       ```console
       ssh -T git@github.com
       ```
    - Befehle`ssh -T git@github.com` testet die Verbindung zu GitHub unter Verwendung des eingerichteten SSH-Schlüssels.
    - [ssh-shell](#ssh-secure-shell)
    - [ssh-agent](#ssh-agent)
      
2. **Fehler beim Pushen: `fatal: unable to access 'https://github.com/USER/REPO.git/': The requested URL returned error: 403`**
   - **Ursache:** Zugriffsrechte auf das Repository sind unzureichend.
   - **Lösung:** 
     - Sicherstellen, dass die erforderlichen Berechtigungen für das Repository vorhanden sind.
     - Git-Konfiguration überprüfen:
       ```console
       git config --global user.name "your_username"
       git config --global user.email "your_email@example.com"
       ```
    - Befehle überprüfen und setzen den Git-[windows_user] und die E-Mail-Adresse.
      
3. **Fehler beim Mergen: `CONFLICT (content): Merge conflict in file.txt`**
   - **Ursache:** Änderungen in der gleichen Datei widersprechen sich.
   - **Lösung:** 
     - Die Datei mit Konflikten öffnen und die Konflikte manuell beheben.
     - Änderungen stagen und committen:
       ```console
       git add file.txt
       git commit -m "Resolved merge conflict in file.txt"
       ```
    - Befehl `git add` stagt die Datei nach der Behebung der Konflikte, und `git commit` speichert die Änderungen.
      
4. **Fehler bei der Submodule-Aktualisierung: `fatal: no submodule mapping found in .gitmodules for path 'submodule_path'`**
   - **Ursache:** Die `.gitmodules`-Datei ist nicht korrekt konfiguriert oder wurde gelöscht.
   - **Lösung:** 
     - Die `.gitmodules`-Datei überprüfen und sicherstellen, dass alle Submodule korrekt aufgeführt sind.
     - Submodule initialisieren und aktualisieren:
       ```console
       git submodule init
       git submodule update
       ```
    - Befehle initialisieren die Submodule und aktualisieren sie auf den neuesten Stand.    

##### 9.1.2 Probleme bei der Nutzung von IntelliJ IDEA

1. **Problem beim Starten von IntelliJ IDEA: `IDE hangs or crashes`**
   - **Ursache:** Möglicherweise inkompatible Plugins oder fehlerhafte Konfigurationsdateien.
   - **Lösung:** 
     - IntelliJ IDEA im abgesicherten Modus starten:
       ```console
       Help -> Find Action -> Safe Mode
       ```
    - Der abgesicherte Modus deaktiviert Plugins, die möglicherweise die Ursache für das Problem sind.

2. **Problem mit der virtuellen Umgebung: `Python interpreter not configured`**
   - **Ursache:** Die virtuelle Umgebung ist nicht korrekt eingerichtet oder aktiviert.
   - **Lösung:** 
     - Sicherstellen, dass die virtuelle Umgebung korrekt erstellt wurde:
       ```console
       python -m venv venv
       ```
    - Befehl erstellt eine neue virtuelle Umgebung.
     - Virtuelle Umgebung aktivieren:
       ```console
       venv\Scripts\activate
       ```
    -  Befehl aktiviert die virtuelle Umgebung unter Windows.
     - Python Interpreter in IntelliJ IDEA konfigurieren:
       ```console
       File -> Settings -> Project: <project_name> -> Python Interpreter
       ```
    - Hier wird der Python-Interpreter für das Projekt festgelegt.

3. **Fehlerhafte Projektstruktur: `Cannot resolve symbol`**
   - **Ursache:** Quellverzeichnisse sind nicht korrekt markiert ([Verzeichnismarkierungen](#folder-marks)).
   - **Lösung:** 
     - Relevante Verzeichnisse als Quellverzeichnisse markieren:
       ```console
       Rechtsklick auf das Verzeichnis -> Mark Directory as -> Sources Root
       ```
       - Dieser Schritt stellt sicher, dass IntelliJ IDEA die Quellverzeichnisse korrekt erkennt.

4. **Fehlerhafte Git-Integration: `Unable to fetch changes`**
   - **Ursache:** Die Git-Konfiguration in IntelliJ IDEA ist fehlerhaft.
   - **Lösung:** 
     - Git-Einstellungen überprüfen:
       ```console
       File -> Settings -> Version Control -> Git
       ```
    - Sicherstellen, dass der Pfad zur Git-Installation korrekt ist und keine Fehlkonfigurationen vorliegen.

#### 9.2 Probleme bei der Nutzung von IntelliJ IDEA und Terminals

**Problem 1: AuthorizationManager check failed**

- **Ursache:** Das System führt das signierte Skript nicht aus, da der Publisher nicht als vertrauenswürdig eingestuft wird.
- **Lösung:**
  1. **Verifizierung des Zertifikats im vertrauenswürdigen Stammzertifikatspeicher:**
     ```powershell
     Get-ChildItem -Path Cert:\LocalMachine\Root | Where-Object {$_.Subject -eq "CN=MyScriptSigningCert"}
     ```
    - Überprüft, ob das Zertifikat im Stammzertifikatspeicher vorhanden ist.
  2. **Hinzufügen des Zertifikats zu den vertrauenswürdigen Herausgebern:**
     ```powershell
     Import-Certificate -FilePath "C:\Users\<Ihr[windows_user]>\MyScriptSigningCert.cer" -CertStoreLocation Cert:\LocalMachine\TrustedPublisher
     ```
    - Fügt das Zertifikat zu den vertrauenswürdigen Herausgebern hinzu.
  3. **Überprüfen, ob das Zertifikat für die Code-Signatur geeignet ist:**
     ```powershell
     $cert = Get-ChildItem -Path Cert:\CurrentUser\My\<Thumbprint>
     $cert.Extensions | Format-List
     ```
    - Überprüft die Eignung des Zertifikats für die Code-Signatur.
  4. **Skripte erneut signieren und das Vertrauen bestätigen:**
     ```powershell
     Set-AuthenticodeSignature -FilePath "C:\Users\[windows_user]\script.ps1" -Certificate $cert
     ```
    - Signiert das Skript mit dem entsprechenden Zertifikat.
  5. **Aktualisieren der PowerShell-Ausführungsrichtlinie:**
     ```powershell
     Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
     ```
    - Setzt die Ausführungsrichtlinie auf "RemoteSigned", um die Ausführung signierter Skripte zu erlauben.
  6. **Neustart der PowerShell-Sitzung und IntelliJ IDEA:** Dieser Schritt stellt sicher, dass alle Änderungen wirksam werden.

**Problem 2: UnknownError beim Signieren eines Skripts**

- **Ursache:** Das Zertifikat ist möglicherweise nicht richtig konfiguriert oder nicht für die Codesignatur geeignet.
- **Lösung:**
  1. **Erstellen eines Codesignaturzertifikats:**
     ```powershell
     $cert = New-SelfSignedCertificate -CertStoreLocation Cert:\CurrentUser\My -Subject "CN=MyScriptSigningCert" -KeyUsage DigitalSignature -Type CodeSigningCert
     ```
    - Erstellt ein neues selbstsigniertes Zertifikat für die Codesignatur.
    - [„PowerShell Signatur einrichten“](#script-sign-setup)
  2. **Exportieren und Importieren des Zertifikats:**
     ```powershell
     Export-Certificate -Cert $cert -FilePath "C:\Users\[windows_user]\MyScriptSigningCert.cer"
     Import-Certificate -FilePath "C:\Users\[windows_user]\MyScriptSigningCert.cer" -CertStoreLocation Cert:\LocalMachine\Root
     Import-Certificate -FilePath "C:\Users\[windows_user]\MyScriptSigningCert.cer" -CertStoreLocation Cert:\LocalMachine\TrustedPublisher
     ```
    - Exportiert und importiert das Zertifikat, um es für die Signatur zu verwenden.
  3. **Signieren des Skripts:**
     ```powershell
     Set-AuthenticodeSignature -FilePath "C:\Users\[windows_user]\script.ps1" -Certificate (Get-Item -Path Cert:\CurrentUser\My\<Thumbprint>)
     ```
    - Signiert das Skript mit dem erstellten Zertifikat.

**Problem 3: Fehler bei der Ausführung des Skripts im IntelliJ Terminal**

- **Ursache:** Das Skript wird möglicherweise als "Remote" betrachtet und muss daher signiert sein, um den `AllSigned`-Richtlinien zu entsprechen.
- **Lösung:** Sicherstellen, dass alle Skripte, die im IntelliJ Terminal ausgeführt werden, korrekt signiert sind und die Zertifikate im vertrauenswürdigen Stammzertifikatspeicher und TrustedPublisher-Store importiert sind.

##### 9.2.1 Proxy und Firewall

1. **Problem beim Zugriff auf GitHub hinter einem Proxy: `Could not resolve host: github.com`**
   - **Ursache:** Der Proxy ist nicht korrekt konfiguriert oder blockiert den Zugriff.
   - **Lösung:** 
     - Sicherstellen, dass die Proxy-Einstellungen korrekt sind:
       ```powershell
       git config --global http.proxy http://proxyuser:proxypassword@proxy.server.com:port
       git config --global https.proxy https://proxyuser:proxypassword@proxy.server.com:port
       ```
    - Befehle setzen die HTTP- und HTTPS-Proxy-Einstellungen für Git.
     - DNS-Auflösung überprüfen:
       ```powershell
       nslookup github.com
       ```
       - Dieser Befehl überprüft, ob die DNS-Auflösung für GitHub korrekt funktioniert.
     - Proxy in IntelliJ IDEA konfigurieren:
       ```console
       File -> Settings -> Appearance & Behavior -> System Settings -> HTTP Proxy
       ```
     
### 10. Glossar
<a name="git-repository"></a>
**Git Repository (Repository)**
- **Definition:** Ein Git-Repository ist ein Speicherort, der alle Dateien, Verzeichnisse und die gesamte Historie eines Projekts umfasst, das mit Git, einem verteilten Versionskontrollsystem, verwaltet wird. Es enthält alle Versionen des Codes, einschließlich der gesamten Commit-Historie, Branches, Tags und Konfigurationsdateien.

- **Verwendung:** In einem Git-Repository wird der Quellcode eines Projekts gespeichert und versioniert. Entwickler können den Code aus dem Repository klonen, daran arbeiten und Änderungen zurück in das Repository pushen. Das Repository dient als zentraler Ort, an dem der Projektcode gesichert und nachverfolgt wird.

- **Relevanz im Projekt:** Im "Data_Suite"-Projekt wird ein Git-Repository verwendet, um den gesamten Projektcode zu speichern, inklusive der verschiedenen Submodule. Es ermöglicht mehreren Entwicklern, gemeinsam am Projekt zu arbeiten, während Git sicherstellt, dass alle Änderungen nachvollziehbar und kontrollierbar bleiben.

- **Vorteile:**
  - **Versionskontrolle:** Git speichert die komplette Historie aller Änderungen, wodurch frühere Versionen des Codes einfach wiederhergestellt werden können.
  - **Kollaboration:** Mehrere Entwickler können gleichzeitig am selben Projekt arbeiten und ihre Änderungen in das zentrale Repository einpflegen.
  - **Nachvollziehbarkeit:** Jede Änderung am Code wird mit einem Commit versehen, der Informationen darüber enthält, wer was wann geändert hat.

- **Best Practices:**
  - **Regelmäßige Commits:** Änderungen sollten häufig und in sinnvollen Einheiten (Commits) ins Repository übertragen werden, um eine klare Versionshistorie zu haben.
  - **Aussagekräftige Commit-Nachrichten:** Jede Commit-Nachricht sollte klar und präzise beschreiben, was geändert wurde und warum, um die Historie nachvollziehbar zu halten.
  - **Branch-Management:** Es ist empfehlenswert, Feature-Branches zu verwenden, um neue Funktionen zu entwickeln und diese erst nach erfolgreicher Fertigstellung in den Hauptzweig zu integrieren.

- **Herausforderungen:**
  - **Konflikte:** Wenn mehrere Entwickler gleichzeitig am selben Code arbeiten, können Merge-Konflikte auftreten, die manuell gelöst werden müssen.
  - **Größe des Repositories:** Bei großen Projekten kann das Repository sehr groß werden, was die Klon- und Pull-Zeiten erhöht. Daher sollte das Repository regelmäßig gepflegt und unnötige Dateien ausgeschlossen werden.

<a name="submodule"></a>
**Submodule**
- **Definition:** Ein Submodul ist ein Git-Repository, das innerhalb eines anderen Git-Repositorys (dem sogenannten "Superprojekt") als Unterverzeichnis eingebunden ist. Submodule ermöglichen es, separate Code-Basen in einem Hauptprojekt zu integrieren, ohne den Quellcode direkt in das Hauptprojekt zu kopieren. Dies erleichtert die Verwaltung und Wiederverwendung von gemeinsam genutzten Code-Komponenten über verschiedene Projekte hinweg.

- **Verwendung:** Submodule werden verwendet, um Abhängigkeiten oder Komponenten eines Projekts als eigenständige Git-Repositories zu behandeln. Dadurch können sie unabhängig entwickelt und versioniert werden, während sie trotzdem nahtlos in das Hauptprojekt integriert sind. Submodule sind besonders nützlich, wenn verschiedene Teile eines Projekts von unterschiedlichen Teams entwickelt werden oder wenn bestimmte Komponenten in mehreren Projekten verwendet werden sollen.

- **Relevanz im Projekt:** Im "Data_Suite"-Projekt werden Submodule verwendet, um separate funktionale Einheiten wie den OCR-Manager, das Template-Center oder den Text-Anonymizer als eigenständige Code-Basen zu verwalten. Diese Struktur ermöglicht es, die Entwicklung und Wartung dieser Komponenten zu modularisieren, was die Zusammenarbeit und das Management von Abhängigkeiten erleichtert.

- **Vorteile:**
  - **Modularität:** Submodule ermöglichen eine klare Trennung von Code-Komponenten, was die Wiederverwendbarkeit und Wartbarkeit verbessert.
  - **Unabhängige Versionierung:** Jede Komponente kann in ihrem eigenen Repository versioniert werden, was die Nachverfolgbarkeit und Verwaltung von Änderungen erleichtert.
  - **Konsistenz:** Submodule stellen sicher, dass das Hauptprojekt immer auf eine spezifische Version des eingebundenen Moduls verweist, was Konsistenz in der Entwicklung und im Betrieb gewährleistet.

- **Best Practices:**
  - **Synchronisation:** Es ist wichtig, Submodule regelmäßig zu aktualisieren und sicherzustellen, dass die im Superprojekt referenzierten Versionen aktuell und funktionsfähig sind.
  - **Klare Dokumentation:** Die Verwendung von Submodulen sollte gut dokumentiert werden, insbesondere wie sie aktualisiert und in das Hauptprojekt integriert werden.
  - **Verwendung von Branches:** Bei der Verwendung von Submodulen ist es ratsam, stabile Branches zu referenzieren, um unerwartete Änderungen zu vermeiden.

- **Herausforderungen:**
  - **Komplexität:** Die Verwaltung von Submodulen kann komplex sein, insbesondere wenn viele Submodule oder tief verschachtelte Abhängigkeiten vorhanden sind.
  - **Zusätzlicher Aufwand:** Submodule erfordern zusätzliche Schritte bei der Initialisierung und Aktualisierung, was die Entwicklungsprozesse etwas verlangsamen kann.

<a name="branch"></a>
**Branch**
- **Definition:** Ein Branch (oder Zweig) ist eine parallele Entwicklungsinstanz innerhalb eines Git-Repositorys. Branches ermöglichen es, Änderungen an der Codebasis isoliert von der Hauptentwicklungslinie durchzuführen. Jeder Branch kann unabhängig entwickelt und modifiziert werden, bevor er in den Hauptzweig (häufig "main" oder "master" genannt) integriert wird.

- **Verwendung:** Branches werden verwendet, um neue Features zu entwickeln, Bugs zu beheben oder Experimente durchzuführen, ohne die Stabilität der Hauptcodebasis zu gefährden. Durch das Arbeiten in einem Branch können Entwickler Änderungen vornehmen, testen und verfeinern, bevor diese Änderungen mit dem Hauptprojekt zusammengeführt (gemergt) werden.

- **Relevanz im Projekt:** Im "Data_Suite"-Projekt ermöglichen Branches den Entwicklern, parallel an verschiedenen Features oder Korrekturen zu arbeiten, ohne dass diese sich gegenseitig beeinflussen. So kann zum Beispiel ein Feature-Branch für die Entwicklung eines neuen Moduls erstellt werden, während auf einem anderen Branch Fehlerbehebungen vorgenommen werden. Sobald ein Branch stabil ist, wird er in den Hauptzweig integriert.

- **Vorteile:**
  - **Isolierte Entwicklung:** Branches ermöglichen die parallele Entwicklung ohne das Risiko, den stabilen Code zu beeinträchtigen.
  - **Flexibilität:** Branches bieten die Flexibilität, verschiedene Ansätze auszuprobieren, bevor sie in den Hauptzweig integriert werden.
  - **Zusammenarbeit:** Mehrere Entwickler können gleichzeitig an verschiedenen Branches arbeiten und ihre Änderungen später zusammenführen.

- **Best Practices:**
  - **Konsistente Namensgebung:** Branches sollten klar und konsistent benannt werden, um ihre Funktion oder den Zweck zu kennzeichnen (z.B. `feature/login`, `bugfix/issue-123`).
  - **Regelmäßiges Merging:** Branches sollten regelmäßig mit dem Hauptzweig oder anderen relevanten Branches synchronisiert werden, um Merge-Konflikte zu minimieren.
  - **Verwendung von Feature-Branches:** Für jedes neue Feature oder jede signifikante Änderung sollte ein separater Branch erstellt werden, um die Entwicklung und den Integrationsprozess zu vereinfachen.

- **Herausforderungen:**
  - **Merge-Konflikte:** Beim Zusammenführen (Merging) von Branches können Konflikte auftreten, wenn dieselben Teile des Codes in verschiedenen Branches geändert wurden. Diese Konflikte müssen manuell gelöst werden.
  - **Veraltete Branches:** Branches, die nicht regelmäßig aktualisiert werden, können schnell veralten, was das Zusammenführen schwieriger macht.

<a name="ssh-secure-shell"></a>
**SSH (Secure Shell)**
- **Definition:** SSH (Secure Shell) ist ein Protokoll, das verschlüsselte Kommunikation zwischen Computern ermöglicht und für die sichere Übertragung von Daten sowie die Remote-Verwaltung von Systemen verwendet wird. In der Softwareentwicklung wird SSH häufig für die sichere Authentifizierung und den Zugriff auf entfernte Git-Repositories, wie GitHub, eingesetzt.
- **Relevanz im Projekt:** Im vorliegenden Projekt wird SSH verwendet, um eine sichere Verbindung zwischen der lokalen Entwicklungsumgebung und GitHub herzustellen. Diese Verbindung ist notwendig, um Quellcode aus dem Repository zu klonen, Änderungen zu pushen und neue Branches zu erstellen, ohne dass Passwörter über unsichere Kanäle übertragen werden.
- **Einsatz in der Entwicklungsumgebung:** Die Konfiguration von SSH erfolgt durch die Generierung eines SSH-Schlüsselpaares, das aus einem privaten und einem öffentlichen Schlüssel besteht. Der öffentliche Schlüssel wird in Ihrem GitHub-Konto hinterlegt, während der private Schlüssel lokal gespeichert wird. Dieser Mechanismus stellt sicher, dass nur authentifizierte Benutzer auf das Repository zugreifen können.
- **Integration in die Arbeitsabläufe:** SSH ist direkt in die IDE (z.B. IntelliJ IDEA) integriert, sodass Sie aus der Entwicklungsumgebung heraus nahtlos auf Git-Repositories zugreifen können. Die SSH-Verbindung wird entweder automatisch durch die IDE hergestellt oder kann manuell über die Kommandozeile (z.B. PowerShell oder Git Bash) gestartet werden.

<a name="ssh-agent"></a>
**SSH-Agent**
- **Definition:** Der SSH-Agent ist ein Hintergrundprogramm, das SSH-Schlüssel im Arbeitsspeicher speichert und verwaltet. Es ermöglicht, einmal eingegebene Passphrasen über eine Sitzung hinweg zu speichern, sodass bei nachfolgenden Verbindungen keine erneute Eingabe erforderlich ist.
- **Funktion im Projekt:** In einem Entwicklungsumfeld, insbesondere in einer Enterprise-Umgebung, erleichtert der SSH-Agent die Handhabung von SSH-Verbindungen erheblich. Er übernimmt die Aufgabe, die Passphrase für Ihren SSH-Schlüssel einmalig zu speichern, was repetitive Eingaben vermeidet und die Effizienz steigert. Dies ist besonders nützlich, wenn während einer Entwicklungs- oder Deployment-Sitzung mehrere SSH-Operationen durchgeführt werden.
- **Start und Verwaltung:** Der SSH-Agent wird typischerweise beim Starten der Entwicklungsumgebung oder einer neuen Terminal-Sitzung initialisiert. Entwickler fügen ihren privaten Schlüssel einmalig zum Agenten hinzu, sodass alle nachfolgenden SSH-Verbindungen automatisch authentifiziert werden. In den meisten Unix-basierten Systemen wird der SSH-Agent automatisch mit dem Anmelden an die Shell gestartet; unter Windows kann dies manuell erfolgen, beispielsweise über PowerShell mit dem Befehl `Start-Service ssh-agent`.
- **Best Practices:** Für eine reibungslose Nutzung sollte der SSH-Agent so konfiguriert sein, dass er beim Start des Systems oder der Entwicklungsumgebung automatisch gestartet wird. Dies minimiert Sicherheitsrisiken, da die Passphrase nur einmal pro Sitzung eingegeben werden muss, und reduziert potenzielle Unterbrechungen im Entwicklungsprozess.

<a name="virtual-environment"></a>
**Virtuelle Umgebung (Virtual Environment)**
- **Definition:** Eine virtuelle Umgebung ist ein isolierter Python-Arbeitsbereich, der es ermöglicht, spezifische Versionen von Abhängigkeiten und Paketen für ein Projekt getrennt von anderen Projekten und dem globalen Python-Interpreter zu verwalten. Diese Isolation verhindert, dass Änderungen an einem Projekt unbeabsichtigt andere Projekte oder das System beeinflussen.

- **Relevanz im Projekt:** In einem Projekt wie "Data_Suite", das aus mehreren Submodulen besteht, ist die Verwendung einer virtuellen Umgebung entscheidend. Sie gewährleistet, dass jedes Submodul seine eigenen Abhängigkeiten verwalten kann, ohne dass es zu Konflikten mit anderen Modulen oder globalen Paketen kommt. Dies ist besonders wichtig in Umgebungen, in denen verschiedene Bibliotheken in unterschiedlichen Versionen verwendet werden müssen.

- **Einsatz in der Entwicklungsumgebung:** Im "Data_Suite"-Projekt wird die virtuelle Umgebung mit dem Werkzeug `venv` erstellt. Dadurch können für das Hauptprojekt und die Submodule spezifische Python-Pakete installiert werden, die unabhängig von der globalen Python-Installation sind. Dies fördert Konsistenz und Reproduzierbarkeit im Team, da alle Entwickler mit identischen Abhängigkeiten arbeiten können, ohne dass globale Systemänderungen erforderlich sind.

- **Besonderheiten und Herausforderungen:**
  - **Isolierte Verwaltung von Abhängigkeiten:** Jede virtuelle Umgebung führt ihre eigenen Versionen der benötigten Python-Pakete. Dies minimiert das Risiko von Versionskonflikten und stellt sicher, dass jedes Projekt unter stabilen und vorhersagbaren Bedingungen ausgeführt wird.
  - **Verwaltung von Submodulen:** In Projekten mit mehreren Submodulen kann es herausfordernd sein, Abhängigkeiten zu koordinieren. Es muss entschieden werden, ob für jedes Submodul separate virtuelle Umgebungen eingerichtet werden oder ob alle Module eine gemeinsame Umgebung nutzen. Diese Entscheidung hängt von der Kompatibilität der Abhängigkeiten und der Komplexität des Projekts ab.

- **Vorteile der venv-Nutzung:** Die Verwendung von `venv` ist in einem Enterprise-Umfeld besonders sinnvoll, da sie eine konsistente und reproduzierbare Entwicklungsumgebung sicherstellt. Trotz des zusätzlichen Verwaltungsaufwands überwiegen die Vorteile, insbesondere durch die Vermeidung von Versionskonflikten und die Flexibilität bei der Handhabung von Abhängigkeiten. Für ein komplexes Projekt mit mehreren Submodulen ist die sorgfältige Verwaltung der virtuellen Umgebungen unerlässlich, um eine reibungslose Entwicklung und Integration zu gewährleisten.

- **Best Practices:** Es ist ratsam, für jedes Submodul entweder separate virtuelle Umgebungen zu verwenden oder sicherzustellen, dass alle Submodule kompatible Abhängigkeiten nutzen, die in einer gemeinsamen virtuellen Umgebung verwaltet werden. Regelmäßige Aktualisierung der `requirements.txt`-Dateien und deren Verwaltung im Versionskontrollsystem sind essenziell, um sicherzustellen, dass alle Entwickler mit den gleichen Versionen der Abhängigkeiten arbeiten. Dies unterstützt eine konsistente und problemfreie Entwicklung.

<a name="jinja2"></a>
**Jinja2**
- **Definition:** Jinja2 ist eine moderne und flexible Template-Engine für Python, die es ermöglicht, dynamische Inhalte in HTML, XML oder anderen textbasierten Formaten zu erstellen. Es wird häufig verwendet, um wiederverwendbare Templates zu definieren, die dann mit Daten gefüllt werden, um HTML-Seiten, E-Mails oder andere textbasierte Ausgaben zu generieren.

- **Verwendung:** In Python-Projekten, insbesondere bei der Entwicklung von Webanwendungen, wird Jinja2 verwendet, um Templates zu erstellen, die dynamisch generierte Inhalte enthalten. Jinja2 trennt die Präsentationslogik (wie HTML) vom Python-Code, was die Strukturierung und Wartung von Projekten erleichtert.

- **Relevanz im Projekt:** Im "Data_Suite"-Projekt kann Jinja2 verwendet werden, um HTML-Templates für die Generierung von Berichten, E-Mails oder anderen textbasierten Ausgaben zu erstellen. Durch die Verwendung von Jinja2 können wiederverwendbare Vorlagen definiert werden, die je nach Bedarf mit unterschiedlichen Daten befüllt werden.

- **Vorteile:**
  - **Trennung von Logik und Darstellung:** Jinja2 ermöglicht es, die Darstellung von Daten (z.B. HTML) von der Geschäftslogik zu trennen, was zu einer klareren und modulareren Codebasis führt.
  - **Wiederverwendbarkeit:** Durch die Definition von Templates können diese in verschiedenen Teilen der Anwendung wiederverwendet werden, was die Wartbarkeit verbessert.
  - **Erweiterbarkeit:** Jinja2 bietet eine Vielzahl von Funktionen wie Schleifen, Bedingungen, Filter und Makros, die es ermöglichen, komplexe und dynamische Templates zu erstellen.

- **Best Practices:**
  - **Konsistente Struktur:** Organisieren Sie Ihre Templates in einer klaren und konsistenten Verzeichnisstruktur, um die Wartbarkeit zu erleichtern.
  - **Nutzung von Makros:** Verwenden Sie Makros, um häufig wiederkehrende Template-Elemente zu kapseln und wiederverwendbar zu machen.
  - **Sicherheitsaspekte:** Vermeiden Sie das direkte Einbinden von ungesicherten Daten in Templates, um Sicherheitslücken wie XSS (Cross-Site Scripting) zu verhindern. Jinja2 bietet standardmäßig automatische HTML-Escaping, was dieses Risiko mindert.

- **Herausforderungen:**
  - **Komplexität bei großen Projekten:** In großen Projekten mit vielen Templates kann es schwierig werden, die Übersicht zu behalten, wenn nicht auf eine saubere Strukturierung geachtet wird.
  - **Leistung:** In sehr komplexen Templates kann die Verarbeitungsgeschwindigkeit zum Problem werden. Es ist ratsam, auf eine effiziente Template-Struktur zu achten.

<a name="pip-install"></a>
**Installation von Python-Paketen mit pip**
- **Definition:** `pip` ist das offizielle Paketverwaltungstool für Python. Es wird verwendet, um Python-Pakete aus dem Python Package Index (PyPI) und anderen Repositories zu installieren, zu verwalten und zu aktualisieren. `pip` ist ein unverzichtbares Werkzeug für die Arbeit mit Python-Projekten, da es die Installation und Verwaltung von Bibliotheken und deren Abhängigkeiten vereinfacht.

- **Verwendung:** Mit dem Befehl `pip install <package-name>` wird ein spezifisches Python-Paket installiert. Dieser Befehl lädt das Paket aus dem Standard-PyPI-Repository oder einer angegebenen Quelle herunter und installiert es in der aktuellen Python-Umgebung. Hierbei können auch mehrere Pakete gleichzeitig installiert werden, indem ihre Namen durch Leerzeichen getrennt werden.

- **Beispiel:** 
  ```console
  pip install requests
  ```
  Dieser Befehl installiert die `requests`-Bibliothek, eine weit verbreitete Python-Bibliothek zur Arbeit mit HTTP-Anfragen.

- **Relevanz im Projekt:** In Projekten wie "Data_Suite" wird `pip` verwendet, um alle benötigten Python-Bibliotheken zu installieren, die in der `requirements.txt`-Datei des Projekts aufgelistet sind. Dies stellt sicher, dass alle Entwickler dieselben Versionen von Bibliotheken verwenden, was die Konsistenz und Kompatibilität des Projekts gewährleistet.

- **Vorteile:**
  - **Einfachheit:** `pip` bietet eine einfache Möglichkeit, Pakete zu installieren und zu aktualisieren, ohne manuell nach Abhängigkeiten suchen zu müssen.
  - **Verwaltung von Abhängigkeiten:** `pip` sorgt dafür, dass alle Abhängigkeiten eines Pakets automatisch mitinstalliert werden.
  - **Aktualisierungen:** Mit `pip` können installierte Pakete einfach auf die neueste Version aktualisiert werden.

- **Best Practices:**
  - **Verwendung von `requirements.txt`:** Es ist ratsam, eine `requirements.txt`-Datei zu verwenden, um die Abhängigkeiten eines Projekts festzuhalten. Diese Datei kann mit dem Befehl `pip freeze > requirements.txt` erstellt werden.
  - **Virtuelle Umgebungen:** Installationen sollten idealerweise in einer virtuellen Umgebung (`venv`) erfolgen, um Konflikte mit global installierten Paketen zu vermeiden und die Isolation des Projekts zu gewährleisten.
  - **Regelmäßige Updates:** Halten Sie Pakete auf dem neuesten Stand, um von Sicherheitsupdates und neuen Funktionen zu profitieren. Dies kann mit dem Befehl `pip install --upgrade <package-name>` erfolgen.

<a name="zulu-jdk"></a>
**Zulu JDK**
- **Definition:** Zulu JDK ist eine zertifizierte, vollständig offene Implementierung des Java Development Kit (JDK), die auf OpenJDK basiert. Es wird von Azul Systems gewartet und bietet eine kostenlose, kommerziell unterstützte Java-Plattform für die Entwicklung und den Betrieb von Java-Anwendungen. Zulu JDK ist kompatibel mit den Spezifikationen von Java SE (Standard Edition) und bietet alle Features und Funktionen, die man von einem JDK erwartet.

- **Verwendung:** Zulu JDK wird in Entwicklungsprojekten eingesetzt, um Java-basierte Anwendungen zu kompilieren, auszuführen und zu debuggen. Es bietet eine stabile und zuverlässige Umgebung für die Entwicklung von Java-Anwendungen, die sowohl in Produktions- als auch in Entwicklungsumgebungen eingesetzt werden können.

- **Relevanz im Projekt:** Im "Data_Suite"-Projekt wird Zulu JDK verwendet, um Java-basierte Module und Komponenten zu unterstützen. Es stellt sicher, dass die Java-Anwendungen auf einer zertifizierten und regelmäßigen sicherheitsgepatchten Plattform ausgeführt werden. Die Verwendung von Zulu JDK gewährleistet zudem die Kompatibilität mit anderen OpenJDK-basierten Projekten und bietet langfristige Unterstützung durch Azul Systems.

- **Vorteile:**
  - **Kostenlos und offen:** Zulu JDK ist kostenlos und open-source, was es ideal für den Einsatz in sowohl kleinen als auch großen Projekten macht.
  - **Kommerzielle Unterstützung:** Azul Systems bietet kommerzielle Unterstützung für Zulu JDK, einschließlich regelmäßiger Sicherheitsupdates und Patches.
  - **Breite Plattformunterstützung:** Zulu JDK ist auf verschiedenen Betriebssystemen verfügbar, darunter Windows, Linux und macOS, und unterstützt eine Vielzahl von Hardwarearchitekturen.
  - **Kompatibilität:** Zulu JDK ist vollständig kompatibel mit Java SE-Standards, was eine reibungslose Entwicklung und Ausführung von Java-Anwendungen gewährleistet.

- **Best Practices:**
  - **Regelmäßige Updates:** Es wird empfohlen, regelmäßig nach neuen Versionen von Zulu JDK zu suchen und diese zu installieren, um von den neuesten Sicherheitsupdates und Features zu profitieren.
  - **Einsatz in virtuellen Maschinen:** Für Projekte, die in verschiedenen Umgebungen ausgeführt werden, kann die Verwendung von Zulu JDK in Docker-Containern oder virtuellen Maschinen eine konsistente Laufzeitumgebung sicherstellen.
  - **Konsistente Entwicklungsumgebung:** Entwickler sollten sicherstellen, dass alle Teammitglieder dieselbe Version des Zulu JDK verwenden, um Versionskonflikte und Inkompatibilitäten zu vermeiden.

<a name="folder-marks"></a>
**Verzeichnismarkierung in der Entwicklungsumgebung**
- **Definition:** Verzeichnismarkierung bezieht sich auf die Praxis in Entwicklungsumgebungen wie IntelliJ IDEA oder Visual Studio, bei der bestimmte Verzeichnisse innerhalb eines Projekts als besondere Kategorien von Quellcode oder Ressourcen markiert werden. Diese Markierungen helfen der IDE, die Struktur des Projekts zu verstehen und zu organisieren, sodass bestimmte Verzeichnisse unterschiedliche Behandlungen erfahren, wie z. B. das Kompilieren, das Ausführen von Tests oder das Laden von Ressourcen.

- **Typische Markierungen:**
  - **Source Root (Quellverzeichnis):** Das Verzeichnis, in dem sich der Hauptquellcode des Projekts befindet. Dateien in diesem Verzeichnis werden in der Regel kompiliert und ausgeführt.
  - **Test Root (Testverzeichnis):** Verzeichnisse, die Testcode enthalten. Dateien in diesem Verzeichnis werden verwendet, um die Funktionalität des Quellcodes zu überprüfen und sicherzustellen, dass der Code korrekt arbeitet.
  - **Resource Root (Ressourcenverzeichnis):** Verzeichnisse, die nicht-kompilierbare Ressourcen wie Konfigurationsdateien, Bilder oder andere statische Inhalte enthalten. Diese Dateien werden während der Ausführung des Programms geladen und verwendet.
  - **Excluded (Ausgeschlossenes Verzeichnis):** Verzeichnisse, die von der IDE ignoriert werden sollen. Diese Dateien werden weder kompiliert noch in die Projektstruktur einbezogen.

- **Relevanz im Projekt:** Die korrekte Markierung von Verzeichnissen in einem Projekt wie "Data_Suite" ist entscheidend, um sicherzustellen, dass die Entwicklungsumgebung den Code effizient und korrekt behandelt. Beispielsweise sorgt die Markierung eines Testverzeichnisses als "Test Root" dafür, dass Testframeworks wie JUnit oder pytest den darin enthaltenen Code korrekt ausführen.

- **Vorteile:**
  - **Erhöhte Übersichtlichkeit:** Durch die klare Unterscheidung von Quellcode, Testcode und Ressourcen wird die Projektstruktur übersichtlicher und besser wartbar.
  - **Automatisierung:** Markierungen ermöglichen der Entwicklungsumgebung, automatisch die richtigen Werkzeuge und Einstellungen anzuwenden, z. B. das Testen von Code oder das Bereitstellen von Ressourcen.
  - **Fehlervermeidung:** Die richtige Markierung hilft, typische Fehler zu vermeiden, wie z. B. das versehentliche Kompilieren von Testcode oder das Vergessen, Ressourcen in das Ausgabeverzeichnis zu kopieren.

- **Best Practices:**
  - **Klare Struktur:** Verzeichnisse sollten klar benannt und logisch organisiert sein, um eine intuitive Markierung und Nutzung zu ermöglichen.
  - **Regelmäßige Überprüfung:** Die Markierungen sollten regelmäßig überprüft werden, insbesondere nach größeren Änderungen an der Projektstruktur, um sicherzustellen, dass sie weiterhin korrekt sind.
  - **Dokumentation:** Es ist hilfreich, die Struktur und Markierung der Verzeichnisse in der Projektdokumentation festzuhalten, um neuen Entwicklern den Einstieg zu erleichtern.

<a name="signate-scripts"></a>
**Signieren von Scripts in Windows:**

**Definition:** Das Signieren von Scripts in Windows ist ein Sicherheitsprozess, bei dem eine digitale Signatur einem Skript hinzugefügt wird, um dessen Integrität und Authentizität zu gewährleisten. Diese Signatur bestätigt, dass das Skript von einer vertrauenswürdigen Quelle stammt und seit seiner Signierung nicht manipuliert wurde.

**Relevanz im Projekt:** In Unternehmensumgebungen mit strengen Sicherheitsrichtlinien ist es oft notwendig, dass PowerShell-Skripte signiert werden, bevor sie ausgeführt werden dürfen. Dies verhindert die Ausführung von nicht autorisierten oder manipulierten Skripten und trägt zur Sicherstellung der Sicherheit und Vertrauenswürdigkeit der Codebasis bei.

**Funktionsweise:**
- **Digitale Signatur:** Beim Signieren eines Skripts wird ein kryptografischer Hash des Skripts erstellt und mit einem privaten Schlüssel verschlüsselt. Diese verschlüsselte Hash-Signatur wird dann dem Skript hinzugefügt. Wenn das Skript später ausgeführt wird, verifiziert das System die Signatur mit dem zugehörigen öffentlichen Schlüssel, um sicherzustellen, dass der Inhalt seit der Signatur nicht verändert wurde.
- **Zertifikate:** Zum Signieren von Skripten wird ein Code-Signing-Zertifikat verwendet, das von einer vertrauenswürdigen Zertifizierungsstelle (CA) ausgestellt wird. Dieses Zertifikat enthält den öffentlichen Schlüssel, der zur Verifizierung der Signatur verwendet wird.

**Einsatz im Projekt:** Im "Data_Suite"-Projekt, insbesondere bei der Ausführung von PowerShell-Skripten innerhalb der IntelliJ IDEA Entwicklungsumgebung, ist das Signieren der Skripte notwendig, um die Sicherheitsrichtlinien des Unternehmens zu erfüllen. Jedes PowerShell-Skript, das im Projekt verwendet wird, muss signiert sein, um ausgeführt werden zu können. Dies gilt sowohl für Skripte, die automatisierte Aufgaben ausführen, als auch für solche, die in CI/CD-Pipelines integriert sind.

**Prozess der Signatur:**
1. **Zertifikat anfordern:** Zunächst muss ein Code-Signing-Zertifikat bei der IT-Abteilung oder einer zertifizierten Zertifizierungsstelle angefordert werden. Das Zertifikat wird in der Regel im Windows-Zertifikatspeicher hinterlegt.
2. **Skript signieren:** Um ein PowerShell-Skript zu signieren, wird das `Set-AuthenticodeSignature`-Cmdlet verwendet:
   ```powershell
   Set-AuthenticodeSignature -FilePath "C:\Path\To\YourScript.ps1" -Certificate (Get-Item Cert:\CurrentUser\My\YOURCERTTHUMBPRINT)
   ```
   Hierbei wird das Zertifikat, das für die Signatur verwendet werden soll, über den Thumbprint identifiziert.
3. **Signatur aktualisieren:** Wenn das Skript geändert wird, muss es erneut signiert werden, da sich der Hash-Wert ändert und die ursprüngliche Signatur ungültig wird.

**Vorteile:**
- **Sicherheitsgarantie:** Signierte Skripte gewährleisten, dass der Code von einer vertrauenswürdigen Quelle stammt und seit seiner Signierung nicht manipuliert wurde.
- **Compliance:** Das Signieren von Skripten hilft Unternehmen dabei, regulatorische Anforderungen und interne Sicherheitsrichtlinien zu erfüllen.
- **Vertrauenswürdigkeit:** Systeme und Benutzer können sich darauf verlassen, dass signierte Skripte sicher ausgeführt werden können.

**Nachteile:**
- **Verwaltungsaufwand:** Das Signieren von Skripten erfordert zusätzlichen Aufwand, insbesondere wenn Skripte häufig aktualisiert werden.
- **Notwendigkeit eines Zertifikats:** Entwickler müssen Zugriff auf ein gültiges Code-Signing-Zertifikat haben, was zusätzliche Kosten und Verwaltungsaufwand bedeuten kann.

**Best Practices:**
- **Regelmäßige Zertifikatsaktualisierung:** Stellen Sie sicher, dass das verwendete Code-Signing-Zertifikat aktuell ist und rechtzeitig erneuert wird.
- **Skript-Management:** Verwalten Sie Ihre Skripte zentral und signieren Sie sie nach jeder Änderung, um die Integrität sicherzustellen.
- **Vermeidung von Unsicherheitsstufen:** Konfigurieren Sie Ihre PowerShell-ExecutionPolicy so, dass nur signierte Skripte ausgeführt werden dürfen, um das Risiko durch unsignierten Code zu minimieren.

<a name="unit-test"></a>
**Unit Test**
- **Definition:** Ein Unit Test ist eine Methode des Softwaretestens, bei der einzelne "Units" oder kleinste funktionale Teile des Codes (z. B. Funktionen, Methoden, oder Klassen) isoliert geprüft werden, um sicherzustellen, dass sie korrekt funktionieren. Unit Tests sind die kleinste Testeinheit im Entwicklungsprozess und sollen garantieren, dass jede Komponente unabhängig von anderen korrekt arbeitet.

- **Funktionsweise:** Unit Tests werden in der Regel automatisiert durchgeführt und sind so konzipiert, dass sie spezifische Eingaben an eine Codeeinheit übergeben und die Ausgaben mit den erwarteten Ergebnissen vergleichen. Wenn der Test fehlschlägt, deutet dies darauf hin, dass der Code fehlerhaft ist oder sich nicht wie erwartet verhält. Unit Tests werden häufig mithilfe von Test-Frameworks wie `unittest` (Python), `JUnit` (Java), oder `NUnit` (C#) implementiert.

- **Einsatz im Projekt:** In einem komplexen Projekt wie "Data_Suite", das aus mehreren Submodulen besteht, spielen Unit Tests eine entscheidende Rolle. Sie stellen sicher, dass jede einzelne Komponente in den Submodulen zuverlässig arbeitet, bevor sie in größere Systeme integriert wird. Durch das frühe Erkennen von Fehlern in isolierten Einheiten wird die Fehlerbehebung erheblich erleichtert und die Wahrscheinlichkeit von Bugs in der finalen Anwendung reduziert.

- **Vorteile:**
  - **Frühe Fehlererkennung:** Unit Tests identifizieren Probleme im Code frühzeitig, bevor sie in die nächste Entwicklungsphase übergehen oder in die Produktion gelangen.
  - **Erleichterte Refaktorisierung:** Da Unit Tests sicherstellen, dass bestehender Code weiterhin korrekt funktioniert, ermöglichen sie eine risikofreie Refaktorisierung und Verbesserung des Codes.
  - **Dokumentation des Codes:** Unit Tests dokumentieren den erwarteten Gebrauch und die Funktionalität einer Codeeinheit, was das Verständnis und die Wartung des Codes erleichtert.
  - **Erhöhte Codequalität:** Die regelmäßige Durchführung von Unit Tests trägt dazu bei, dass der Code stabiler und wartbarer ist.

- **Nachteile:**
  - **Wartungsaufwand:** Die Erstellung und Pflege von Unit Tests erfordert zusätzlichen Aufwand, insbesondere wenn der Code häufig geändert wird.
  - **Isolationsproblem:** Da Unit Tests in Isolation durchgeführt werden, können sie keine Probleme erkennen, die durch die Interaktion zwischen verschiedenen Systemkomponenten entstehen.

- **Best Practices:** 
  - **Testabdeckung sicherstellen:** Eine hohe Testabdeckung ist entscheidend, um sicherzustellen, dass alle relevanten Codepfade getestet werden. Dies erhöht die Wahrscheinlichkeit, Fehler frühzeitig zu erkennen.
  - **Regelmäßige Ausführung:** Unit Tests sollten regelmäßig ausgeführt werden, idealerweise als Teil eines Continuous Integration (CI) Prozesses, um sicherzustellen, dass der Code nach jeder Änderung weiterhin korrekt funktioniert.
  - **Kleine, fokussierte Tests:** Jeder Unit Test sollte nur eine spezifische Funktionalität testen, um den Testfokus klar und die Fehlersuche im Fehlerfall einfach zu halten.
  - **Mocking und Stubbing:** Nutzen von Mocks und Stubs, um Abhängigkeiten von externen Systemen zu isolieren und Unit Tests unabhängig von anderen Systemkomponenten auszuführen.

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
<a name="intellij-checkup"></a>
- **IntelliJ System-Check Powershell Script:**  
### PowerShell-Skript: `intelliJ_system_check.ps1`

```powershell
#region Parameter Definitions and Script Setup
[CmdletBinding()]
param (
    # Verify the Home Directory
    [Parameter(Mandatory=$true)]
    [ValidateNotNullOrEmpty()]
    [ValidateScript({Test-Path -Path $_ -PathType Container})]
    [string]$homeDir,

    # Path to the Proxy Certificate
    [Parameter(Mandatory=$true)]
    [ValidateNotNullOrEmpty()]
    [string]$proxyCertPath,

    # Optional Git Username
    [ValidateNotNullOrEmpty()]
    [string]$gitUserName = "",

    # Optional Git User Email
    [ValidatePattern('^[\w\.-]+@[\w\.-]+\.\w+$')]
    [string]$gitUserEmail = "",

    # Verify the Registry Path for IntelliJ IDEA
    [ValidatePattern('^HKLM:\\')]
    [ValidateNotNullOrEmpty()]
    [string]$intelliJRegistryPath = "HKLM:\SOFTWARE\JetBrains\*",

    # Path for System Check Output Log
    [Parameter(Mandatory=$true)]
    [ValidateNotNullOrEmpty()]
    [string]$outputDir
)

# Set the Error Action Preference to "Continue" to allow the script to continue on non-critical errors
$ErrorActionPreference = "Continue"

# Define the Output Log
$outputFile = Join-Path -Path $outputDir -ChildPath "system_check_results.txt"
$totalSteps = 5
#endregion

#region Helper Functions

# Function to Output Results and Log
function Write-Result {
    param ([string]$message)
    $message | Out-File -FilePath $outputFile -Append
    Write-Information $message -InformationAction Continue
}

# Function to Display Progress of the System Check
function Show-Progress {
    param ([string]$currentTask, [int]$currentStep)
    $percentage = ($currentStep / $totalSteps) * 100
    Write-Progress -Activity "System Check Running..." -Status $currentTask -PercentComplete $percentage
    Write-Information "Progress: $currentTask ($percentage% completed)"
}

# Function to Verify Paths
function Test-PathExists {
    param ([string]$path, [string]$description, [switch]$isFile)
    try {
        if (-not [string]::IsNullOrWhiteSpace($path)) {
            $pathType = if ($isFile) { "Leaf" } else { "Container" }
            if (Test-Path -Path $path -PathType $pathType) {
                Write-Result "${description} exists."
            } else {
                Write-Warning "${description} does not exist."
            }
        } else {
            Write-Warning "Warning: No path provided for ${description}."
        }
    } catch {
        Write-Warning "Warning: Error checking ${description}: $($_.Exception.Message)"
    }
}

# Function to Check if a File Exists
function Test-FileExists {
    param ([string]$directory, [string]$fileName, [string]$description)
    try {
        if (-not [string]::IsNullOrWhiteSpace($directory) -and -not [string]::IsNullOrWhiteSpace($fileName)) {
            $filePath = Join-Path -Path $directory -ChildPath $fileName
            if (Test-Path $filePath -PathType Leaf) {
                Write-Result "${description} is present."
            } else {
                Write-Warning "${description} is missing."
            }
        } else {
            Write-Warning "Warning: Invalid directory or filename for ${description}."
        }
    } catch {
        Write-Warning "Warning: Error checking ${description}: $($_.Exception.Message)"
    }
}
#endregion

#region System Check Functions

# Verify Git Installation and Configuration
function Test-GitInstallation {
    Show-Progress -currentTask "Verifying Git Installation" -currentStep 1
    Write-Result "Verifying Git Installation and Configuration:"
    Write-Result "-------------------------------------------"

    try {
        $gitVersion = git --version
        Write-Result "Git Version: ${gitVersion}"
        
        $gitConfig = @{
            "Username" = if ($gitUserName) { $gitUserName } else { git config --global user.name }
            "Email" = if ($gitUserEmail) { $gitUserEmail } else { git config --global user.email }
        }

        foreach ($key in $gitConfig.Keys) {
            Write-Result "Git ${key}: $($gitConfig[$key])"
        }
    } catch [System.Management.Automation.CommandNotFoundException] {
        Write-Warning "Warning: Git is not installed or not in the PATH. Please install Git or add it to the PATH."
    } catch {
        Write-Warning "Warning: Unexpected error during Git verification: $($_.Exception.Message)"
    }
}

# Verify Directories and Git Repositories
function Test-DirectoriesAndGitRepos {
    Show-Progress -currentTask "Verifying Directories and Git Repositories" -currentStep 2
    Write-Result "`nVerifying Directories and Existing Git Repositories:"
    Write-Result "-------------------------------------------"

    @{
        "Data Suite Directory" = Join-Path -Path $homeDir -ChildPath "data_suite"
        "Git Repository" = Join-Path -Path $homeDir -ChildPath "data_suite\.git"
    }.GetEnumerator() | ForEach-Object {
        Test-PathExists -path $_.Value -description $_.Key
    }
}

# Verify Applications and Relevant Directories
function Test-ApplicationsAndDirectories {
    Show-Progress -currentTask "Verifying Relevant Applications and Directories" -currentStep 3
    Write-Result "`nVerifying Relevant Applications and Directories:"
    Write-Result "-------------------------------------------"

    $paths = @{
        "venv" = Join-Path -Path $homeDir -ChildPath "data_suite\venv"
        "OCR Manager" = Join-Path -Path $homeDir -ChildPath "data_suite\ocr_enricher\src"
        "Zulu JDK" = Join-Path -Path $homeDir -ChildPath "data_suite\zulu"
        "npm Dependencies" = Join-Path -Path $homeDir -ChildPath "data_suite\venv\node_modules"
    }

    $paths.GetEnumerator() | ForEach-Object {
        Test-PathExists -path $_.Value -description $_.Key
    }

    try {
        if (Get-Module -ListAvailable -Name chardet) {
            Write-Result "The 'chardet' library is installed."
        } else {
            Write-Warning "Warning: The 'chardet' library is not installed. Please install it using 'pip install chardet'."
        }
    } catch {
        Write-Warning "Warning: Error verifying the 'chardet' library: $($_.Exception.Message)"
    }

    "OCR_Enricher.ps1", "pdf_utils.py" | ForEach-Object {
        Test-FileExists -directory $paths["OCR Manager"] -fileName $_ -description "OCR Manager file '$_'"
    }

    "ocr_enricher", "template_center", "text_anonymizer", "html_b2b_form" | ForEach-Object {
        $modulePath = Join-Path -Path $homeDir -ChildPath "data_suite\$_"
        Test-FileExists -directory $modulePath -fileName "requirements.txt" -description "requirements.txt in submodule '$_'"
    }
}

# Verify Additional System Information
function Test-AdditionalSystemInfo {
    Show-Progress -currentTask "Verifying Additional System Information" -currentStep 4
    Write-Result "`nAdditional System Verifications:"
    Write-Result "-------------------------------------------"

    try {
        $osVersion = (Get-CimInstance -ClassName Win32_OperatingSystem -ErrorAction Stop).Caption
        Write-Result "Windows Operating System: ${osVersion}"
    } catch {
        Write-Warning "Warning: Error retrieving the operating system version: $($_.Exception.Message)"
    }

    try {
        $intelliJPath = Get-ItemProperty -Path $intelliJRegistryPath -ErrorAction Stop
        if ($intelliJPath) {
            Write-Result "Found JetBrains Products:"
            $intelliJPath | ForEach-Object {
                Write-Result "Product: $($_.DisplayName) Version: $($_.DisplayVersion)"
            }
        } else {
            Write-Warning "Warning: No JetBrains products found. Please install IntelliJ IDEA."
        }
    } catch

 [System.Management.Automation.ItemNotFoundException] {
        Write-Warning "Warning: JetBrains registry path not found. IntelliJ IDEA may not be installed."
    } catch {
        Write-Warning "Warning: Error accessing the JetBrains registry: $($_.Exception.Message)"
    }

    Test-PathExists -path $proxyCertPath -description "Corporate Proxy Certificate" -isFile

    $sshKeyPath = Join-Path -Path $env:USERPROFILE -ChildPath ".ssh\id_rsa.pub"
    Test-PathExists -path $sshKeyPath -description "SSH Key" -isFile

    try {
        if (Get-Process ssh-agent -ErrorAction SilentlyContinue) {
            Write-Result "SSH-Agent is running."
        } else {
            Write-Warning "Warning: SSH-Agent is not running. Please start it with 'Start-Service ssh-agent'."
        }
    } catch {
        Write-Warning "Warning: Error checking SSH-Agent status: $($_.Exception.Message)"
    }

    $gitConfigPath = Join-Path -Path $env:USERPROFILE -ChildPath ".gitconfig"
    Test-FileExists -directory $env:USERPROFILE -fileName ".gitconfig" -description ".gitconfig file"

    "misc.xml", "modules.xml", "workspace.xml" | ForEach-Object {
        $ideaPath = Join-Path -Path $homeDir -ChildPath "data_suite\.idea"
        Test-FileExists -directory $ideaPath -fileName $_ -description ".idea configuration file '$_'"
    }
}

# Verify Network Access
function Test-NetworkAccess {
    Show-Progress -currentTask "Verifying Network Access" -currentStep 5
    Write-Result "`nVerifying Network Access:"
    Write-Result "-------------------------------------------"

    $urls = @(
        "https://www.jetbrains.com",
        "https://www.npmjs.com",
        "https://www.azul.com",
        "https://www.github.com",
        "https://webpack.js.org",
        "https://pypi.org"
    )

    foreach ($url in $urls) {
        try {
            # Attempt to make a web request
            $response = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 10 -ErrorAction Stop
            if ($response.StatusCode -eq 200) {
                Write-Result "Network connection to ${url} successful."
            } else {
                Write-Warning "Warning: Network connection to ${url} returned status code $($response.StatusCode)."
            }
        } catch {
            Write-Warning "Warning: Network error accessing ${url}: $($_.Exception.Message). Please check your internet connection or proxy settings."
        }
    }
}


#endregion

#region Main Script Execution
try {
    Write-Information "Starting system check..."
    
    # Validate proxyCertPath at runtime
    if (-not (Test-Path -Path $proxyCertPath -PathType Leaf)) {
        Write-Warning "Warning: The provided proxy certificate path '$proxyCertPath' does not exist or is not a valid file."
    }
    
    Test-GitInstallation
    Test-DirectoriesAndGitRepos
    Test-ApplicationsAndDirectories
    Test-AdditionalSystemInfo
    Test-NetworkAccess
    Write-Result "`nSystem check completed successfully."
} catch {
    Write-Warning "Warning: A critical error occurred during the system check: $($_.Exception.Message)"
} finally {
    Write-Progress -Activity "System Check Running..." -Completed
}
#endregion
# SIG # Begin signature block
# MIIFeQYJKoZIhvcNAQcCoIIFajCCBWYCAQExCzAJBgUrDgMCGgUAMGkGCisGAQQB
# diverse
# fAWpyVYGTx19w7UalA==
# SIG # End signature block


## Example of Invocation via Windows PowerShell Console
 
#.\intelliJ_system_check.ps1 -homeDir "C:\Users\[windows_user]\git\data_suite\" -proxyCertPath "C:\Users\[windows_user]\cert\CompanyProxy.cer" -gitUserName "Eitel" -gitUserEmail "sepp@msn.com" -intelliJRegistryPath "HKLM:\SOFTWARE\JetBrains\*" -outputDir "C:\Users\[windows_user]\git\data_suite\logs" -Verbose -Debug

### Explanation of the Example:

#- **`-homeDir "C:\Users\[windows_user]\git\data_suite\"`**: Specifies the home directory where the data suite is located.
#- **`-proxyCertPath "C:\Users\[windows_user]\cert\CompanyProxy.cer"`**: Specifies the path to the proxy certificate.
#- **`-gitUserName "Eitel"`**: Optional parameter for the Git username.
#- **`-gitUserEmail "sepp@msn.com"`**: Optional parameter for the Git user email.
#- **`-intelliJRegistryPath "HKLM:\SOFTWARE\JetBrains\*"`**: Specifies the registry path for IntelliJ.
#- **`-outputDir "C:\Users\[windows_user]\git\data_suite\logs"`**: Specifies the directory where the `system_check_results.txt` file will be saved.
#- **`-Verbose -Debug`**: Enables verbose and debug output to provide detailed information during script execution.
```

```powershell
<#
.SYNOPSIS
    Dieses Skript überprüft die Installation und Konfiguration verschiedener Komponenten,
    die für die Entwicklung mit IntelliJ IDEA benötigt werden.

.DESCRIPTION
    Dieses Skript enthält Anweisungen zur Signierung des Skripts, um die Integrität und Authentizität
    in gut gesicherten Unternehmensumgebungen sicherzustellen. 

.EXAMPLE
```powershell
.\intelliJ_system_check.ps1 -homeDir "C:\Users\TestUser\" -proxyCertPath "C:\Path\To\ProxyCert.cer" -gitUserName "JohnDoe" -gitUserEmail "john.doe@example.com" -intelliJRegistryPath "HKLM:\SOFTWARE\JetBrains\*"
```
**2. Bericht: Wichtige Hinweise zur Ausführung:**
1. **Zugriffsrechte**:
   - Stellen Sie sicher, dass das PowerShell-Skript mit ausreichenden Rechten ausgeführt wird, insbesondere wenn auf Registryschlüssel oder Systempfade zugegriffen wird.

2. **Pfadvalidierung**:
   - Die Skriptparameter, insbesondere `$homeDir` und `$proxyCertPath`, müssen auf gültige Verzeichnisse bzw. Dateien verweisen. Eine unzureichende Validierung kann dazu führen, dass das Skript fehlschlägt.

3. **Netzwerkverbindungen**:
   - Das Skript führt Netzwerktests durch, die möglicherweise durch Firewall-Einstellungen oder Proxy-Konfigurationen blockiert werden. Stellen Sie sicher, dass die entsprechenden URLs erreichbar sind.

4. **Abhängigkeiten**:
   - Einige Tests im Skript erfordern, dass bestimmte Module wie `git` oder `chardet` installiert und konfiguriert sind. Stellen Sie sicher, dass diese vorhanden sind, um fehlerfreie Ausführungen zu gewährleisten.

5. **Performance-Hinweise**:
   - Bei großen Projekten oder langsamen Netzwerkverbindungen kann die Ausführung des Skripts längere Zeit in Anspruch nehmen. Es wird empfohlen, das Skript in einem isolierten Umfeld oder während der weniger betriebsamen Zeiten auszuführen.
. 

**2. Step-by-Step  Anleitung zur Signierung:**
 --------------------------------------------
#### 1. Erstellen eines selbstsignierten Zertifikats (Erst-Signatur):
#### Erstellen Sie ein selbstsigniertes Zertifikat, das für die Signierung der Skripte verwendet wird.
$cert = New-SelfSignedCertificate -CertStoreLocation Cert:\CurrentUser\My -Subject "CN=PSScriptSigningCert" -KeyUsage DigitalSignature -Type CodeSigningCert

#### 2. Exportieren des Zertifikats (Erst-Signatur):
#### Exportieren Sie das Zertifikat, um es in den vertrauenswürdigen Zertifikatspeicher des Systems zu importieren.
Export-Certificate -Cert $cert -FilePath "C:\Users\[windows_user]\cert\PSScriptSigningCert.cer"

#### 3. Importieren des Zertifikats in vertrauenswürdige Speicher (Erst-Signatur):
#### Importieren Sie das Zertifikat, damit es vom System als vertrauenswürdig anerkannt wird.
Import-Certificate -FilePath "C:\Users\[windows_user]\cert\PSScriptSigningCert.cer" -CertStoreLocation Cert:\LocalMachine\Root
Import-Certificate -FilePath "C:\Users\[windows_user]\cert\PSScriptSigningCert.cer" -CertStoreLocation Cert:\LocalMachine\TrustedPublisher

#### 4. Ermitteln des Thumbprints (Erst-Signatur & Update-Signatur):
#### Der Thumbprint des Zertifikats wird benötigt, um das Skript zu signieren.
$thumbprint = (Get-ChildItem -Path Cert:\CurrentUser\My | Where-Object {$_.Subject -eq "CN=PSScriptSigningCert"} | Select-Object -ExpandProperty Thumbprint).Trim()

#### 5. Signieren des Skripts (Erst-Signatur & Update-Signatur):
#### Signieren Sie das Skript. Dieser Schritt muss nach jeder Änderung am Skript wiederholt werden.
Set-AuthenticodeSignature -FilePath "C:\Users\[windows_user]\intelliJ_system_check.ps1" -Certificate (Get-Item -Path Cert:\CurrentUser\My\$thumbprint)

#### 6. Ausführungsrichtlinie setzen (optional) (Erst-Signatur & Update-Signatur):
#### Setzen Sie die Ausführungsrichtlinie auf 'RemoteSigned', um sicherzustellen, dass nur vertrauenswürdige Skripte ausgeführt werden.
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

#### Hinweis: Nach jeder Änderung am Skript muss die Signatur aktualisiert werden, indem die Schritte 4 bis 6 erneut ausgeführt werden.
  
--- 

#### Step-by-Step Liste zur Installation und Konfiguration
----------------------------------------
#### 1. **Systemvoraussetzungen prüfen**
   - Überprüfen des Betriebssystems (Windows 10 Enterprise Version 22H2)
   - Sicherstellen, dass lokale Administratorrechte vorhanden sind
   - Netzwerkzugriff und Proxy-Konfigurationen prüfen

#### 2. **Git for Windows installieren**
   - Git for Windows von der offiziellen Website herunterladen und installieren
   - Installation mit den Standardeinstellungen abschließen

#### 3. **Git konfigurieren**
   - [windows_user] und E-Mail-Adresse konfigurieren
   - Optional: Proxy-Einstellungen für Git konfigurieren, falls notwendig
   - Sicherstellen, dass Git korrekt installiert ist (`git --version`)

#### 4. **IntelliJ IDEA installieren**
   - IntelliJ IDEA Ultimate von der JetBrains-Website herunterladen und installieren
   - Installation mit den Standardeinstellungen abschließen

#### 5. **SSH-Schlüssel generieren und konfigurieren**
   - Einen neuen SSH-Schlüssel erstellen (`ssh-keygen -t rsa -b 4096 -C "email@example.com"`)
   - Den SSH-Schlüssel zum SSH-Agenten hinzufügen
   - Öffentlichen Schlüssel zu GitHub hinzufügen
   - Überprüfen der SSH-Verbindung zu GitHub

#### 6. **Hauptprojekt von GitHub erstellen und initialisieren**
   - Erstellen des Hauptprojekts `Data_Suite` auf GitHub
   - Lokales Git-Repository initialisieren und mit GitHub verbinden
   - Hauptbranch in `main` umbenennen und Änderungen pushen

#### 7. **Submodule hinzufügen und konfigurieren**
   - Submodule wie `OCR_Manager_Suite`, `Template_Center`, `Text_Anonymizer`, und `html_b2b_form` hinzufügen
   - Submodule initialisieren und aktualisieren
   - Submodule stagen und committen

#### 8. **Virtuelle Umgebung einrichten**
   - Virtuelle Umgebung erstellen und aktivieren (`python -m venv venv`)
   - Abhängigkeiten aus der `requirements.txt` installieren

#### 9. **Zulu JDK und andere notwendige Komponenten installieren**
   - Zulu JDK herunterladen und installieren
   - Zulu JDK in IntelliJ IDEA als SDK konfigurieren

#### 10. **Projekt in IntelliJ IDEA importieren**
   - IntelliJ IDEA öffnen und das Projekt `Data_Suite` importieren
   - Submodule in IntelliJ konfigurieren

#### 11. **IntelliJ IDEA konfigurieren**
   - Terminal-Einstellungen in IntelliJ IDEA anpassen
   - Python Interpreter für das Projekt konfigurieren
   - Relevante Verzeichnisse als Quellverzeichnisse markieren
   - Git-Integration in IntelliJ IDEA überprüfen und konfigurieren

#### 12. **Automatisierte Validierung der Konfiguration**
   - Ein Skript zur Systemüberprüfung ausführen, um die Konfiguration zu validieren
   - Überprüfen der Installation und Konfiguration aller relevanten Komponenten
     
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
