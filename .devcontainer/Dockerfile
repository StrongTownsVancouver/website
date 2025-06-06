ARG PLATFORM

FROM --platform=${PLATFORM} debian:latest

ARG NODE_VERSION=22.15.0
ARG PNPM_VERSION=10.10.0
ARG NODE_PLATFORM

ARG USERNAME=dev
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# Install dependencies, and productivity tools
RUN apt update && apt upgrade -y && apt install sudo git wget curl zsh bat htop -y && update-ca-certificates
RUN apt install -y gpg && mkdir -p /etc/apt/keyrings && \
    wget -qO- https://raw.githubusercontent.com/eza-community/eza/main/deb.asc | gpg --dearmor -o /etc/apt/keyrings/gierens.gpg && \
    echo "deb [signed-by=/etc/apt/keyrings/gierens.gpg] http://deb.gierens.de stable main" | tee /etc/apt/sources.list.d/gierens.list && \
    chmod 644 /etc/apt/keyrings/gierens.gpg /etc/apt/sources.list.d/gierens.list && \
    apt update && \
    apt install -y eza

# Install NodeJS
ADD https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-${NODE_PLATFORM}.tar.gz /node.tar.gz
RUN tar -xz -f /node.tar.gz -C /usr/local --remove-files --strip-components=1 \
    --exclude='*.md' --exclude='LICENSE' \
    --exclude='share' --exclude='lib/node_modules/' \
    --exclude='bin/npm' --exclude='bin/npx' --exclude='bin/corepack'

# Install PNPM binary   
ADD https://github.com/pnpm/pnpm/releases/download/v$PNPM_VERSION/pnpm-${NODE_PLATFORM} /usr/local/bin/pnpm
RUN chmod a+rx /usr/local/bin/pnpm

# Add permissions to the dev user
RUN groupadd --gid $USER_GID $USERNAME && \
    useradd --uid $USER_UID --gid $USER_GID -m -s /bin/zsh $USERNAME && \
    echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME && \
    chmod 0440 /etc/sudoers.d/$USERNAME
RUN usermod -aG sudo dev
USER dev

RUN mkdir /home/dev/workspace && chown -R $USER_UID:$USER_GID /home/dev/workspace

# Install oh-my-zsh
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# Alias downloaded tools
RUN echo "alias ls=eza" >> $HOME/.zshrc && \
    echo "alias ll=eza -la" >> $HOME/.zshrc && \
    echo "alias cat=batcat" >> $HOME/.zshrc